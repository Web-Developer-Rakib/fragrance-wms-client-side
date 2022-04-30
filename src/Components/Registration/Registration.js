import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import GoogleImg from "../../Images/google.jpg";
import "./Registration.css";

const Registration = () => {
  const { setUserInfo, handleGoogleSigup } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [errorM, setErrorM] = useState("");

  // Register function
  const handleRegistration = () => {
    if (password !== confirmPassword) {
      toast.warn("Password did not macthed.");
    } else if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.warn("Please fill up all fields.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          sendEmailVerification(auth.currentUser);
          const user = userCredential.user;
          setUserInfo(user);
          navigate("/thank-you");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorM(errorMessage);
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("This email is already in use.");
          }
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            toast.error("Please check your internet connection.");
          }
        });
    }
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h3>REGISTER</h3>
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          required
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm your password"
          required
        />
        <br />
        <b>
          Already have an account? <Link to="/login">Login now</Link>
        </b>
        <br />
        <div className="checkbox">
          <input
            onClick={(e) => setChecked(e.target.checked)}
            type="checkbox"
            id="check-box"
            className="check-box"
          />
          <label htmlFor="check-box">Accept T&C</label>
        </div>
        <br />
        {checked ? (
          <button
            onClick={handleRegistration}
            type="submit"
            className="register-btn"
          >
            REGISTER
          </button>
        ) : (
          <button className="register-btn btn-off">REGISTER</button>
        )}
        <br />
        {checked ? (
          <button onClick={handleGoogleSigup} className="register-btn">
            <img src={GoogleImg} alt="" />
            REGISTER WITH GOOGLE
          </button>
        ) : (
          <button className="register-btn btn-off">
            <img src={GoogleImg} alt="" />
            REGISTER WITH GOOGLE
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
