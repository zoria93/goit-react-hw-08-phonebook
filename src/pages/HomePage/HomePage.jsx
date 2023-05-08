import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { Div, Title, LinkBtn } from 'pages/HomePage/HomePage.styled';
const HomePage = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);

  return (
    <>
      <Title>Welcome to Phonebook {userName.name}</Title>
      {!IsLoggedIn && (
        <Div>
          <Link to="/register">
            <Button type="button" colorScheme="yellow" size="lg">
              Register
            </Button>
          </Link>
          <LinkBtn to="/login">
            <Button type="button" colorScheme="yellow" size="lg">
              Login
            </Button>
          </LinkBtn>
        </Div>
      )}
    </>
  );
};

export default HomePage;
