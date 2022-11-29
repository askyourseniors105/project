import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = () =>{
    setLoading(true);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((res) => console.log(res))
    .catch((err) => setError(err.code))
    .finally(() => setLoading(false));
  };

  const signInWithGithub = () =>{
    setLoading(true);
    signInWithPopup(auth, new GithubAuthProvider())
    .then((res) => console.log(res))
    .catch((err) => setError(err.code))
    .finally(() => setLoading(false));
  };


  const contextValue = {
    user,
    loading,
    error,
    signInWithGithub,
    signInWithGoogle,

  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
