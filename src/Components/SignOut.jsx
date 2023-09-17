import React from 'react'



const Style = {
    button: `bg-orange-300 px-4 py-2 hover:bg-gray-300 cursor-pointer rounded-xl`
}

const SignOut = () => {
  return (
    <div className={Style.button}>
      Sign-Out
    </div>
  )
}

export default SignOut;
