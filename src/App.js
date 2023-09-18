import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./Firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from "./Components/Chat";


const styles = {
  container: `max-w-[720px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-slate-200 mt-10 shadow-xl border relative`,
}

function App() {

const [user] = useAuthState(auth)
//console.log(user)

  return (
    <div className={styles.container}>
    <section className={styles.section}>

      {/*Navbar component*/}
      <Navbar />

      
      {user ?  <Chat /> : null}
      
 
    </section>
    </div>
  );
}

export default App;
