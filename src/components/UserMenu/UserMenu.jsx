import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/operations';
import { Button } from '@chakra-ui/react';
import { Div, Text } from 'components/UserMenu/UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Div>
      <Text>Welcome {userName.email}</Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        colorScheme="yellow"
        size="md"
      >
        Logout
      </Button>
    </Div>
  );
};

export default UserMenu;
