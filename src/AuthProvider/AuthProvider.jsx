import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOut = () => { 
        signOut(auth);
        setUser(null);
        setLoading(false);
    }
       useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, user => {
           setUser(user);
           setLoading(false);
       })
        return () => unSubscribe();
    })
    const authInfo = {
        user,
        loading,
        createUser, 
        signIn,
        signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;