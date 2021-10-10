import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
   return (
      <div className="register-form">
         <div>
            <h2> Register: Create Account</h2>
            <form onSubmit="">
               <input type="text" placeholder="Your Name" />
               <br />
               <input type="password" placeholder="Your Password" />
               <br />
               <input type="password" placeholder="Re-enter Password" />
               <br />
               <input type="submit" value="Submit" />
            </form>
            <p>
               Already have an account? <Link to="/login">Login</Link>{" "}
            </p>
            <div>-------------------------or---------------------------</div>
            <button className="btn btn-regular"> Google Sign In </button>
         </div>
      </div>
   );
};

export default Register;
