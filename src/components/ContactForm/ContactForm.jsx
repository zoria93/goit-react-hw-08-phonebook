import { addContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {
  Form,
  Label,
  Span,
  Input,
  Text,
} from 'components/ContactForm/ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    addContacts();
    reset();
  };

  const handleChange = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setNumber(e.target.value);
        break;

      default:
        alert('Input error');
    }
  };

  const addContacts = () => {
    const duplicateName = contacts.find(
      contact =>
        [...contact.name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase() ===
        [...name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase()
    );
    if (duplicateName) {
      return toast({
        title: 'Error!',
        description: `${name} is already in contacts`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    return toast({
      title: 'Success!',
      description: 'Contact successfully added.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" colorScheme="teal" size="md" width="40%">
        <AddIcon />
        <Text>Add contact</Text>
      </Button>
    </Form>
  );
};

export default ContactForm;
