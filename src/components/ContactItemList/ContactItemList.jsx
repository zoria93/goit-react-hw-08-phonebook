import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteIcon } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import {
  ListContacts,
  Button,
  Div,
  Span,
} from 'components/ContactItemList/ContactItemList.styled';

const ContactItemList = ({ name, id, number }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const deleteContacts = () => {
    dispatch(deleteContact(id));
    return toast({
      title: 'Success!',
      description: 'Сontact deleted successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ListContacts>
      <Div>
        <Avatar name={name} src="https://bit.ly/tioluwani-kolawole" size="sm" />
        <Span>
          {name}: {number}
        </Span>
      </Div>
      <Button onClick={() => deleteContacts(id)} type="button">
        <DeleteIcon w={6} h={6} />
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
