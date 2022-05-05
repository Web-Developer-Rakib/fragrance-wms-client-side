import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import GoogleImg from "../../Images/google.jpg";
import "./Login.css";
const Login = () => {
  const { setUserInfo, handleGoogleProvider } = useFirebase();
  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //Sing in function
  const handleSignIn = () => {
    if (email === "" || password === "") {
      toast.warn("Please fill up all fields.");
    } else {
      setLoading(
        <div>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
        </div>
      );
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUserInfo(user);
          toast.success("Login successful.");
          handleJWT();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/wrong-password).") {
            toast.warn("Wrong password.");
          }
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            toast.error("Please check your internet connection.");
          }
          if (errorMessage === "Firebase: Error (auth/missing-email).") {
            toast.warn("Please enter your email.");
          }
          if (errorMessage === "Firebase: Error (auth/user-not-found).") {
            toast.warn("This email is not registered yet.");
          }
          if (errorMessage === "Firebase: Error (auth/invalid-email).") {
            toast.warn("Please enter a valid email.");
          }
        })
        .finally(() => {
          setLoading("");
        });
    }
  };
  //JWT post function
  const handleJWT = () => {
    fetch("https://mighty-atoll-14871.herokuapp.com/login", {
      method: "POST",
      body: email,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
      })
      .catch(() => {
        toast.error("Invalid access token.");
      });
  };

  //Password reset function
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/missing-email).") {
          toast.warn("Please enter your email.");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          toast.warn("This email is not registered yet.");
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          toast.warn("Please enter a valid email.");
        }
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          toast.error("Please check your internet connection.");
        }
      });
  };
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>LOGIN</h3>
        {loading}
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
        <b>
          New here?{" "}
          <Link to="/register" className="mini-btn-lp">
            Register now
          </Link>
        </b>
        <b>
          Forgot password?{" "}
          <span className="mini-btn-lp" onClick={handlePasswordReset}>
            Reset now
          </span>
        </b>
        <br />
        <button onClick={handleSignIn} className="login-btn">
          LOGIN
        </button>
        <br />
        <button
          onClick={handleGoogleProvider}
          type="submit"
          className="login-btn"
        >
          <img src={GoogleImg} alt="" />
          LOGIN WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
