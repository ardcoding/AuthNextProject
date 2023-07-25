import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './../../store';

import { login as loginService } from './../../features/authSlice';

const Auth = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const user = await loginService('Ahmet', '123');
    if (user) {
      dispatch(login(user));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div style={{textAlign:"center"}}>
          <h1>Logged In</h1>
          <h3 style={{fontWeight:"bolder"}}>Welcome, <span style={{color:"red"}}>{user.username}</span></h3>
          <button style={{borderRadius:"20px", width:"10rem", height:"2rem", backgroundColor:"red", color:"white",borderStyle:"none"}} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{textAlign:"center"}}>
        <h1>Press To Login</h1>
        <button style={{borderRadius:"20px", width:"10rem", height:"2rem", backgroundColor:"blue", color:"white",borderStyle:"none"}} onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
