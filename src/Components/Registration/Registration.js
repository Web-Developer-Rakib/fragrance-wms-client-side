import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import GoogleImg from "../../Images/google.jpg";
import "./Registration.css";

const Registration = () => {
  const { setUserInfo, handleGoogleProvider } = useFirebase();
  const [loading, setLoading] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

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
      setLoading(
        <div>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
        </div>
      );
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          sendEmailVerification(auth.currentUser);
          const user = userCredential.user;
          setUserInfo(user);
          navigate("/thank-you");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            toast.warn("This email is already in use.");
          }
          if (errorMessage === "Firebase: Error (auth/invalid-email).") {
            toast.warn("Please enter a valid email.");
          }
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            toast.error("Please check your internet connection.");
          }
          if (
            errorMessage ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.warn("Password should be at least 6 characters.");
          }
        })
        .finally(() => {
          setLoading("");
        });
    }
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h3>REGISTER</h3>
        {loading}
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <br />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm your password"
        />
        <br />
        <b>
          Already have an account?{" "}
          <Link className="mini-btn-rp" to="/login">
            Login now
          </Link>
        </b>
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
          <button onClick={handleRegistration} className="register-btn">
            REGISTER
          </button>
        ) : (
          <button className="register-btn btn-off">REGISTER</button>
        )}
        <br />
        {checked ? (
          <button onClick={handleGoogleProvider} className="register-btn">
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
