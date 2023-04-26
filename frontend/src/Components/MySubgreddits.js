import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
const asyncHandler = require('express-async-handler')

export default function Mysubgreddits(props) {
    const nav = useNavigate();
    const [subgred, setSubgred] = useState([])

    useEffect(
        () => {
            response();
        }
    );
    const response = asyncHandler(
        async () => {
            let data = {
                creator: JSON.parse(localStorage.getItem("UserDetails")).username
            }
            const resp = await fetch("http://localhost:5000/api/subgreddits/mySubs", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const subData = await resp.json();
            console.log(subData)
            setSubgred(subData);
        }
    )

    const gotoCreate = () => {
        nav("/create");
    }
    const goBack = () => {
        nav("/profile");
    }

    if (props.set) {
        return (
            <>
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg" onClick={gotoCreate}>Create New Subgreddit</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={goBack}>Go Back to Profile</button>
                </div>
                <div className="container">
                    {
                        subgred.map((x) =>{
                            return (
                            <>
                                <div className="card" style={{width: '18rem'}} >
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">SubGreddit: {x.name}</li>
                                        <br />
                                        <li className="list-group-item">Description: {x.description}</li>
                                        <br />
                                        <li className="list-group-item"> Banned Words: {x.bannedwords}</li>
                                    </ul>
                                </div>
                                <br />
                                <br />
                            </>
                            )
                        }
                        )
                    }
                </div>
            </>
        );
    }
    else return;
}