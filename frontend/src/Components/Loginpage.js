import React from 'react';
// import ProfilePage from './ProfilePage';
import "../App.js"
import { useNavigate } from 'react-router-dom';
const asyncHandler = require('express-async-handler')

export default function Loginpage(props) {
    
    const navigate = useNavigate();
    const response = asyncHandler(async (e) => {
        let data = {
            email: document.getElementById("exampleInputEmail1").value,
            password: document.getElementById("exampleInputPassword1").value
        };
        const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        localStorage.setItem('UserDetails', JSON.stringify(Data));
        localStorage.setItem("Data", Data.Id);
        localStorage.setItem("Email", Data.email);
        localStorage.setItem("Token", Data.token);
        console.log(Data);
        const check = localStorage.getItem('UserDetails')
        console.log(check)
        if(Data.token != null)
        {
            localStorage.setItem("AuthTok", true);
            navigate("/profile");
        }
    })
    const userpass = (e) => {
        e.preventDefault();
        let a = document.getElementById("exampleInputEmail1").value;
        let b = document.getElementById("exampleInputPassword1").value;
        props.setuser(a);
        props.setpass(b);
        response();
    };
    const item1 = localStorage.getItem("AuthTok");

    if (props.logger === "log" && !item1) {
        return (
            <div>
                <form onSubmit={userpass}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
    else return;
}
