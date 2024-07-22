import React from 'react';
import videoBg from './video.mp4'; 

const AdminLogin = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container">
        <h1>Res Tech Solutions</h1>
        
        <input type="text" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <a href="/forgot-password">Forgot password</a>
        <button>Login</button>
        <a href="../register">Register</a>
      </div>
    </div>
  );
}

export default AdminLogin;
