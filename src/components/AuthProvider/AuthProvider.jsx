import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create a New Custom User...
  const createNewCustomUser = async (email, password) => {
    setIsLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //  Log In To a Custom User
  const loginCustomUser = async (email, password) => {
    setIsLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };
  // Sign Out Handler

  const signOutSite = async () => {
    setIsLoading(true);
    return await signOut(auth);
  };

  //  On Auth State Change .....
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
        console.log("I am from OnAuth State change:", currentUser);
      } else {
        setUser(null);
        setIsLoading(false);
        console.log("I am from OnAuth State change:", currentUser);
      }
    });

    return () => {
      unSubscribed();
    };
  }, []);

  const authInfo = {
    user,
    createNewCustomUser,
    loginCustomUser,
    signOutSite,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propType = {
  children: PropTypes.node,
};

export default AuthProvider;
