import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);

      return unsubscribe();
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
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .then((error) => {
        console.error(error);
      });
  };
  const AuthInfo = { signUp, loader, user, signIn, googleSignIn, logOut };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
