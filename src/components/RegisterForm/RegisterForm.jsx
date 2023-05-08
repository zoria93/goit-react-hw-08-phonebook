import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Form, Label, Div } from 'components/RegisterForm/RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <label>
          Username
          <Input type="text" name="name" size="md" />
        </label>
        <label>
          Email
          <Input type="email" name="email" size="md" />
        </label>
        <Label>
          Password
          <Input type="password" name="password" size="md" />
        </Label>
        <Button type="submit" colorScheme="yellow" size="lg">
          Register
        </Button>
      </Form>
    </Div>
  );
};

export default RegisterForm;
