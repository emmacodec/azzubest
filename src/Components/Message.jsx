import React from 'react'
import { auth } from '../Firebase';


const Style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    p: `absolute mt-[-4rem] text-gray-700 text-xs`,
    sent: `bg-[#FF9999] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    receive: `bg-[#FFBCD9] text-black float-left rounded-br-full`,
};

const Message = ({messages}) => {

const textClass =
messages.uid === auth.currentUser.uid
? `${Style.sent}`
: `${Style.receive}`

  return (
    <div>
      <div className={`${Style.message} ${textClass}`}>
        <p className={Style.p}>{messages.name}</p>
        <p>{messages.text}</p>
      </div>
    </div>
  )
}

export default Message;
