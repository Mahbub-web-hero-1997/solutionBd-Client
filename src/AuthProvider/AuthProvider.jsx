import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(unsubscribe);
    });
  }, []);
  const signUp = (email, password) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:" + errorCode, errorMessage);
        // ..
      });
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AuthInfo = { signUp, loader, user, signIn, googleSignIn };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
