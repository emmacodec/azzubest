import React from 'react'
import { auth } from '../Firebase'
import { signOut } from 'firebase/auth'



const Style = {
    button: `bg-orange-300 px-4 py-2 hover:bg-gray-300 cursor-pointer rounded-xl`
}



const LogOut = () => {

const SignOut = () => {
        signOut(auth)
    }

  return (
    <button onClick={() => auth.signOut()} className={Style.button}>
      SignOut
    </button>
  )
}

export default LogOut;
