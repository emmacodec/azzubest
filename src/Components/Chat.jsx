import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';


const Style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {

  const [text, setText] = useState([]);

const scroll = useRef()

useEffect(() =>{
  const a = query(collection(db, 'chats'), orderBy('type'))
  const unsubscribe = onSnapshot(a, (querySnapshot) => {
    let text = [];
    querySnapshot.forEach((doc) => {
      text.push({...doc.data(), id: doc.id});
    });
    setText(text);
      
  });

  return () => unsubscribe();
},[])

  return (
    <>
    <main className={Style.main}>
      
      {/*message component*/}
      {text && text.map((messages) =>(
        <Message key={messages.id} messages={messages} />
      ))}
      
    </main>

    {/*send message*/}
    <span ref={scroll}></span>
    </>
  )
}

export default Chat;
