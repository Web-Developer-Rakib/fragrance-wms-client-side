import React from "react";
import GoogleImg from "../../Images/google.jpg";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="register-page">
      <form className="register-form">
        <h3>REGISTER</h3>
        <br />
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <input type="password" placeholder="Confirm your password" />
        <br />
        <b>
          Already have an account? <a href="a">Login now</a>
        </b>
        <br />
        <div className="checkbox">
          <input type="checkbox" id="check-box" className="check-box" />
          <label htmlFor="check-box">Accept T&C</label>
        </div>
        <br />
        <button type="submit" className="register-btn">
          REGISTER
        </button>
        <br />
        <button type="submit" className="register-btn">
          <img src={GoogleImg} alt="" />
          REGISTER WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Registration;
