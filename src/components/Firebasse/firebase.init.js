// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
   initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* Steps for authentication
------------------------------
Initial Setup
1. Firebase: Create project
2. create web app
3. get configuration
4. Initialize firebase
5. Enable auth method
-------------------------------
*/
