import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Div, FirstTitle, Title } from 'pages/ContactsPage/ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <FirstTitle>Phonebook</FirstTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      {isLoading && !error && <Loader />}
    </Div>
  );
};

export default ContactsPage;
