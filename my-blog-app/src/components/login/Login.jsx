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
    if (!userData.username || !userData.password) {
      alert("Fill in all fields");
      return;
    }
    login(userData.username);
  }
  return (
    <div className="blog-container">
      <form onSubmit={onSubmit} className="login-row">
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
      <p>You must login before you may interact with any of the site's content.</p>
    </div>
  )
}

export default Login;