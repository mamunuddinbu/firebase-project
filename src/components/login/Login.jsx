/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loggedUser, setLoggedUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        
        setLoggedUser(user)
        console.log(user)
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
      })
      .catch((error) => {
        console.log('you have got an excellent error' , error.message);
      });
  };

  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={handleGoogleSignIn}>Login</button>
      {
        loggedUser && <div><h1>{loggedUser.displayName}</h1></div>
      }
    </div>
  );
};

export default Login;
