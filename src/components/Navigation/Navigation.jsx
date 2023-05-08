import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Link } from 'components/Navigation/Navigation.styled';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
