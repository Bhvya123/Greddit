import ReactDOM from "react-dom/client";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Loginpage from './Components/Loginpage.js';
import Signup from './Components/Signuppage.js';
import Home from './Components/Home.js';
import { useState } from 'react';
import ProfilePage from "./Components/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoutes";

function App() {

  const [log, setlog] = useState("home");
  const [user, setuser] = useState("12345");
  const [pass, setpass] = useState("12345");

  const a = localStorage.getItem("AuthTok");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='container'>
            <Navbar logger={setlog} />
            <Loginpage logger={log} setuser={setuser} setpass={setpass} user={user} pass={pass} />
            <Signup sinner={log} />
            <Home homer={log} />
          </div>}/>
        <Route path="/profile" element={
          <div className="container">
            <ProfilePage logger={setlog} />
          </div>
          }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
