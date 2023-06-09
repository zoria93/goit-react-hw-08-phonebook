import { List } from 'components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import ContactItemList from 'components/ContactItemList/ContactItemList';

const ContactList = () => {
  const contscts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacs = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contscts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const contactsName = filterContacs();

  return (
    <List>
      {contactsName.map(({ name, id, number }) => {
        return <ContactItemList key={id} name={name} id={id} number={number} />;
      })}
    </List>
  );
};

export default ContactList;
