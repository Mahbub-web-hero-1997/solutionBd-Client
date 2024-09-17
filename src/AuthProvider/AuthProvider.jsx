import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleSignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignOut = () => {
    setLoading(true);
    signOut();
    console.log("Signed Out");
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleAuthProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User", currentUser);

      setLoading(false);
      return unSubscribe();
    });
  }, []);
  const authInfo = {
    handleSignUp,
    handleLogin,
    handleGoogleSignIn,
    handleSignOut,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
