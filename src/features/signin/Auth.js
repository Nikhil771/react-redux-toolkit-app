import React from "react";
import { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { getUserName , getPassword } from './authSlice';

const Auth = () => {

    const [username, setUserName] = useState("Nikhil")
    const [password, setPassword] = useState("123")

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.username)
 
  return (
    <div>
      <h1>Hello sign-in</h1>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" required onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          required onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => { dispatch(getUserName(username)) }}>Login</button>
      </div>
        <h1>UserName : {user}</h1>
    </div>
  );
};

export default Auth;
