import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './LandingPage.css';
import SignupModal from '../SignupModal/SignupModal';

export const LandingPage = () => {
    const[isModalOpen , setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div className="hero-section">
          <h1>Your</h1>
          <h1>stories & ideas</h1>
          <p className="subtitle">A place to read, write, and deepen your understanding</p>
          <button className="start-reading-button"
          onClick={()=>setIsModalOpen(true)}>Start reading</button>
        </div>
      </div>
      <Footer />
      {isModalOpen && <SignupModal onClose={()=> setIsModalOpen(false)}/>}
    </>
  );
}