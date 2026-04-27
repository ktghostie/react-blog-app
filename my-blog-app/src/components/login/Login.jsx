import React, { useState } from 'react';
import { useAuth } from '../authWrapper/AuthContext';

function Login() {
  const {login} = useAuth();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(userData);
    login(userData.username);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Username"
          value={userData.username} 
          onChange={(e) => setUserData({...userData, username: e.target.value})}
        />
        <input 
          type='password'
          placeholder='Password'
          value={userData.password} 
          onChange={(e) => setUserData({...userData, password: e.target.value})}
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;