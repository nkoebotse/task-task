import React from 'react';
import videoBg from './video.mp4'; 

const RegisterAdmin = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container">
        <h1>Registration Form</h1>
        
        <input type="password" placeholder="Create a UserName " />
        
        <input type="text" placeholder="Create a Password" />
        
        
        <button>Register</button>
        <a href="/">login</a>
       
      </div>
    </div>
  );
}

export default RegisterAdmin;
