import React from "react";
import GoogleImg from "../../Images/google.jpg";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h3>LOGIN</h3>
        <br />
        <input type="Email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <b>
          New here? <a href="a">Register now</a>
        </b>
        <b>
          Forgot password? <a href="a">Reset now</a>
        </b>
        <br />
        <button type="submit" className="login-btn">
          LOGIN
        </button>
        <br />
        <button type="submit" className="login-btn">
          <img src={GoogleImg} alt="" />
          LOGIN WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Login;
