import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
const HomePage = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);

  return (
    <div>
      <h1>Welcome to Phonebook {userName.name}</h1>
      {!IsLoggedIn && (
        <>
          <Link to="/register">
            <button to="/register" type="button">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default HomePage;
