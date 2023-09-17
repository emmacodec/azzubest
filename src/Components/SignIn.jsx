import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import React from 'react'
import GoogleButton from 'react-google-button';
import { auth } from '../Firebase';


const Styles = {
  container: `flex justify-center`
}

//functionality for users to sign-in
const userSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}


const SignIn = () => {
  return (
    <div className={Styles.container}>
     <GoogleButton onClick={userSignIn} /> 
    </div>
  )
}

export default SignIn;
