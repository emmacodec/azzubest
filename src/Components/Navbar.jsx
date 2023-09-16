import React from 'react';


const style = {
    navbar: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl font-bold uppercase tracking-widest`,
}

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <h1 className={style.heading}>Mingle's App</h1>
    </div>
  )
}

export default Navbar;
