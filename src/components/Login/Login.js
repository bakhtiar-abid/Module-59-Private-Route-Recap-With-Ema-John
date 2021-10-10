import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
   const { googleSignIn } = useAuth();
   const location = useLocation();
   return (
      <div className="login-form">
         <div>
            <h2>Login</h2>
            <form onSubmit="">
               <input type="email" placeholder="Your Email" />
               <br />
               <input type="password" name="" placeholder="Your Password" />
               <br />
               <input type="submit" value="Submit" />
            </form>
            <p>
               new to ema-john <Link to="/register">Create Account</Link>{" "}
            </p>
            <div>------------------or--------------------</div>
            <button onClick={googleSignIn} className="btn-regular">
               Google Sign In
            </button>
         </div>
      </div>
   );
};

export default Login;
