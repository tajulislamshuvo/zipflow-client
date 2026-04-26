import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(true);

  const registerUser = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
        setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
  }

  const signInGoogle = () =>{
        setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut =() =>{
    setLoading(true)
    return signOut(auth);
  }

   const sendPassResetEmailFunc = (email) => {
     setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile= (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(()=>{
    const unsubsCribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })

    return () =>{
      unsubsCribe()
    }
  }, [])

  const authInfo = {
    registerUser,
    signInUser,
    sendPassResetEmailFunc,
    signInGoogle ,
    user,
    loading,
    logOut,
    updateUserProfile
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;