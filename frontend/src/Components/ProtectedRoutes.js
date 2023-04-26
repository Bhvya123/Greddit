import React from 'react';
import App from '../App.js'
import { useNavigate } from "react-router-dom";


const ProtectedRoute = () => {
  
  const nav = useNavigate();
  const a = localStorage.getItem("AuthTok");
    if (a) {
      nav("/profile");
    }
    return (
      <App></App>
    );
  };

  export default ProtectedRoute