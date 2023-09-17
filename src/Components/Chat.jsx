import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'


const Style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {

const scroll = useRef()

  return (
    <>
    <main className={Style.main}>
      
      {/*message component*/}
      <Message />
    </main>

    {/*send message*/}
    <span ref={scroll}></span>
    </>
  )
}

export default Chat;
