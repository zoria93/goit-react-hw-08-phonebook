import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Form, Label, Div } from 'components/LoginForm/LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Email
          <Input type="email" name="email" size="md" />
        </label>
        <Label>
          Password
          <Input type="password" name="password" size="md" />
        </Label>
        <Button type="submit" colorScheme="yellow" size="lg">
          Log In
        </Button>
      </Form>
    </Div>
  );
};

export default LoginForm;
