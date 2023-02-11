import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Textarea from './Components/Textarea';
import SignIn from './Components/SignIn';


function App() {
  return (
    <>
      <Header />
      <SignIn />
      {/* <Textarea /> */}
      <Footer />
    </>
  );
}

export default App;
