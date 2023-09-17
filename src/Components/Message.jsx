import React from 'react'


const Style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    p: `absolute mt-[-4rem] text-gray-700 text-xs`,
    sent: `bg-[#FF9999] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    receive: `bg-[#FFBCD9] text-black float-left rounded-br-full`,
};

const Message = () => {
  return (
    <div>
      <div className={Style.message}>
        <p className={Style.p}>Emmanuel</p>
        <p>I'm a Front-End Web Developer</p>
      </div>
    </div>
  )
}

export default Message;
