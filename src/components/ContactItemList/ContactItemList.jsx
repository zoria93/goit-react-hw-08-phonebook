import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ListContacts,
  Button,
} from 'components/ContactItemList/ContactItemList.styled';

const ContactItemList = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListContacts>
      {name}: {number}
      <Button onClick={() => deleteContacts(id)} type="button">
        <span>Delete</span>
      </Button>
    </ListContacts>
  );
};

ContactItemList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItemList;
