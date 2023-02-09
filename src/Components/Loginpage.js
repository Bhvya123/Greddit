import React from 'react';
// import ProfilePage from './ProfilePage';
import "../App.js"
import { useNavigate } from 'react-router-dom';

export default function Loginpage(props) {

    const navigate = useNavigate();
    const userpass = (e) => {
        e.preventDefault();
        let a = document.getElementById("exampleInputEmail1").value;
        let b = document.getElementById("exampleInputPassword1").value;
        props.setuser(a);
        props.setpass(b);
        // console.log(a);
        if(a === "admin" && b === "admin")
        {
            localStorage.setItem('AuthTok', true);
            navigate("/profile");
        }
    };
    const item1 = localStorage.getItem("AuthTok");
    // const item2 = localStorage.getItem("PassKey");

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