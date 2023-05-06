import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/operations';

const UserMenu = () => {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome {userName.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
