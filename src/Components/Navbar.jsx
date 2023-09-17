import React from 'react';
import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';


const style = {
    navbar: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl font-bold uppercase tracking-widest`,
}

const Navbar = () => {

const [user] = useAuthState(auth)
console.log(user)

  return (
    <div className={style.navbar}>
      <h1 className={style.heading}>Mingle's App</h1>
      <SignIn />
      <SignOut />
    </div>
  )
}

export default Navbar;
