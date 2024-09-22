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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false); // Stop loader once auth state is known
    });

    return () => unsubscribe(); // Properly clean up the subscription
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
        console.error("Error:" + error.code, error.message);
      })
      .finally(() => {
        setLoader(false); // Stop loader after signup completes
      });
  };

  const signIn = (email, password) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoader(false); // Stop loader after login completes
      });
  };

  const googleSignIn = () => {
    setLoader(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Logged in with Google
        console.log(result.user);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoader(false);
        // Stop loader after Google login completes
      });
  };

  const logOut = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoader(false); // Stop loader after logout completes
      });
  };

  const AuthInfo = { signUp, loader, user, signIn, googleSignIn, logOut };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
