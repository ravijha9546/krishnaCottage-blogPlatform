import React from 'react';
import './SignupModal.css';


const SignupModal = ({ onClose }) => {
  return (
    
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>Join Krishna Cottage.</h2>
        
        <div className="signup-options">
          <button className="signup-button google">Sign up with Google</button>
          <button className="signup-button email">Sign up with email</button>
        </div>
        
        <p className="signin-link">
          Already have an account? <a href="#">Sign in</a>
        </p>

        <p className="terms-text">
          Click “Sign up” to agree to Medium’s <a href="#">Terms of Service</a> and acknowledge that Medium’s <a href="#">Privacy Policy</a> applies to you.
        </p>
      </div>
    </div>
  );
};

export default SignupModal;