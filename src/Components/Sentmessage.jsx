import React, { useState } from 'react'
import { auth, db } from '../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



const Styles = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full p-3 text-xl bg-purple-800 text-white outline-none border-none rounded-lg`,
    btn: `w-[20%] bg-green-500 rounded-lg font-bold`
}

const Sentmessage = ({scroll}) => {

const [input, setInput] = useState('');

const sentMessage = async (e) => {
    e.preventDefault()

    if (input === '') {
        alert('please enter a valid message')
        return
    }
    const {uid, displayName} =auth.currentUser
    await addDoc(collection(db, 'chats'), {
        text: input,
        name: displayName,
        uid,
        type: serverTimestamp()
    })
    setInput('')

    scroll.current.scrollIntoView({behavior: 'smooth'})
};


  return (
    <form 
    onSubmit={sentMessage} 
    className={Styles.form}
    >
      <input 
      value={input} 
      onChange={(e) =>setInput(e.target.value)} 
      type='text' 
      placeholder='comment' 
      className={Styles.input} />
      
      <button 
      type='submit' 
      className={Styles.btn}>
        Send
        </button>
    </form>
  )
}

export default Sentmessage;
