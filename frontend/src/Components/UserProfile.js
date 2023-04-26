import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserProfile.css";
const asyncHandler = require('express-async-handler');

export default function UserProfile(props) {

    const [user, setuser] = useState("");
    const [age, setage] = useState(0);
    const [contactNum, setcontactNum] = useState(0);

    const nav = useNavigate();
    let details = JSON.parse(localStorage.getItem('UserDetails'));

    const response = asyncHandler(async ()=> {
        const data = {
            email: details.email,
            username: details.username,
            age: details.age,
            contact: details.contactNumber
        }
        console.log(data)
        const resp = await fetch("http://localhost:5000/api/users/edit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization' : `Bearer ${details.token}` 
            },
            body: JSON.stringify(data)
        });
        const Data = await resp.json();
        setuser(Data.uname);
        setage(Data.age);
        setcontactNum(Data.contactNo);
    });

    const onclickU = () => {
        const userdata = JSON.parse(localStorage.getItem('UserDetails'))
        var newUsername = document.getElementById('UsernameChanger').value
        if (!newUsername.replace(/\s/g, '').length) {
            console.log("failed")
            alert("failed")
        }
        else {
            const newUserrname = document.getElementById('UsernameChanger').value
            userdata.username = newUserrname
            details = userdata
            localStorage.setItem('UserDetails', JSON.stringify(userdata));
            response();
        };
    }

    useEffect(
        ()=> {
        setuser(details.username);
        setage(details.age);
        setcontactNum(details.contactNumber);
    }
    );

    const onclickA = () => {
        const userdata = JSON.parse(localStorage.getItem('UserDetails'))
        var newUserAge = document.getElementById('ageChanger').value
        if (!newUserAge.replace(/\s/g, '').length || newUserAge <= 0) {
            console.log("failed")
            alert("Age cannot be negative!!!!")
        }
        else {
            const newUserrname = document.getElementById('ageChanger').value
            userdata.age= newUserrname
            details = userdata
            localStorage.setItem('UserDetails', JSON.stringify(userdata));
            response();
        };

    }
    const onclickC = () => {
        const userdata = JSON.parse(localStorage.getItem('UserDetails'))
        console.log(userdata)
        var newUsername = document.getElementById('contactChanger').value
        if (!newUsername.replace(/\s/g, '').length) {
            console.log("failed")
            alert("failed")
        }
        else {
            const newUserrname = document.getElementById('contactChanger').value
            console.log(newUserrname)
            userdata.contactNumber = newUserrname
            details = userdata
            localStorage.setItem('UserDetails', JSON.stringify(userdata));
            response();
        };
    }

    if (props.usef) {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* Username */}
                <div className="offcanvas offcanvas-top" id="demoU">
                    <div className="offcanvas-body">
                        <p>UserName: <br />
                            <input type="text" className="form-control" id="UsernameChanger" aria-describedby="UserHelper" placeholder="Enter new username" />
                        </p>
                        <button className="btn btn-secondary text-reset" type="button" data-bs-dismiss="offcanvas">cancel</button>
                        <button className="btn btn-primary text-reset" type="button" data-bs-dismiss="offcanvas" onClick={onclickU}>Submit</button>
                    </div>
                </div>
                {/* Age */}
                <div className="offcanvas offcanvas-top" id="demoA">
                    <div className="offcanvas-body">
                        <p>Age: <br />
                            <input type="number" className="form-control" id="ageChanger" aria-describedby="ageHelper" placeholder="Enter new age" />
                        </p>
                        <button className="btn btn-secondary text-reset" type="button" data-bs-dismiss="offcanvas">cancel</button>
                        <button className="btn btn-primary text-reset" type="button" data-bs-dismiss="offcanvas" onClick={onclickA}>Submit</button>
                    </div>
                </div>
                {/* contact Number */}
                <div className="offcanvas offcanvas-top" id="demoC">
                    <div className="offcanvas-body">
                        <p>Contact Number: <br />
                            <input type="number" className="form-control" id="contactChanger" aria-describedby="contactHelper" placeholder="Enter new contact number" />
                        </p>
                        <button className="btn btn-secondary text-reset" type="button" data-bs-dismiss="offcanvas">cancel</button>
                        <button className="btn btn-primary text-reset" type="button" data-bs-dismiss="offcanvas" onClick={onclickC}>Submit</button>
                    </div>
                </div>

                <div className="shadow mx-auto">
                    <div className="card mx-auto">
                        {/* <div className="card-header">admin</div> */}
                        <div className="card-body">
                            <p className="card-text"> Email: {details.email}</p>
                            <p className="card-text"> Username: {user} <button className="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#demoU">Edit</button></p>
                            <p className="card-text"> Age: {age} <button className="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#demoA">Edit</button></p>
                            <p className='card-text'> Contact: {contactNum} <button className="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#demoC">Edit</button></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else return;
}