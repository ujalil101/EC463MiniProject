import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Add from "../image/image.png"
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {

    } catch (err) {
      setErr(true);
      console.error(err);
    }
  };
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ENG Chat</span>
            <span className="title">Login</span>
            <form onSubmit={{handleSubmit}}>
                <input type="email" placeholder="email"/> 
                <input type="password" placeholder="password"/> 
                
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
};
export default Login;