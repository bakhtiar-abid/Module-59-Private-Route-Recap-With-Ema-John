import { useState } from "react";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../components/Firebasse/firebase.init";

const googleProvider = new GoogleAuthProvider();

initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const auth = getAuth();

   const signInUsingGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
            // ...
         })
         .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
         });
   };

   const logOut = () => {
      signOut(auth)
         .then(() => {
            setUser({});
         })
         .catch((error) => {
            // An error happened.
         });
   };
   // firebase observe if anything has changed or not for example if user sign in in the website it will keep the record the by using on auth state change by using useeffect in react

   //observe whether user auth state change or not

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            // ...
         }
      });
   }, []);

   return {
      user,
      error,
      googleSignIn: signInUsingGoogle,
      logOut,
   };
};

export default useFirebase;
