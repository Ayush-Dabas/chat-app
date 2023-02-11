import React  from 'react';
import { signInWithGoogle } from "./config";

const SignIn = () => {


  return (
    <>
        <button onClick={signInWithGoogle}>Sign in</button>
        <h1>{localStorage.getItem("name")}</h1>
        <img src={localStorage.getItem("profilePic")}/>
    </>
  )
}

export default SignIn