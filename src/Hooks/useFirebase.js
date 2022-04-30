import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase_init";

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});
  const [googleAuthErr, setGoogleAuthErr] = useState("");

  //Google signup
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSigup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setGoogleAuthErr(errorMessage);
      });
  };

  return { userInfo, setUserInfo, googleAuthErr, handleGoogleSigup };
};

export default useFirebase;
