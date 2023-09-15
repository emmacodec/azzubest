import React from "react";
import Navbar from "./Components/Navbar";


const styles = {
  container: `max-w-[720px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-slate-200 mt-10 shadow-xl border relative`,
}

function App() {
  return (
    <div className={styles.container}>
    <section className={styles.section}>

      {/*Navbar component*/}
      <Navbar />
      {/*chat component*/}
    </section>
    </div>
  );
}

export default App;
