import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
  const history = useHistory();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const Signin = ()=>{
    history.push("/")
  }
  return <div>
  <div className="scontainer">
      <div className="stop-header">
        <h3>Welcome back</h3>
        <p>Enter your credentials to access your account</p>
      </div>
      <form action="">
        <div className="suser">
          <i className="bx bxs-user-circle"></i>
          <input type="text" placeholder="Enter your username" onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div className="spass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>
      </form>
      <div className="sbtn">
        <button onClick={()=>Signin()}>Sign in</button>
      </div>
    </div>
    <p className="slast">Forgot your password? <a href="#"> Reset Password </a></p></div>;
}
