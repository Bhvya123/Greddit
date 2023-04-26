import React from "react";
import { useNavigate } from "react-router-dom";

const asyncHandler = require('express-async-handler')

export default function CreationPage() {

    const nav = useNavigate();
    const response = asyncHandler(
        async () => {
            let name = document.getElementById("1").value;
            let description = document.getElementById("2").value;
            let tags = document.getElementById("3").value.split(',');
            let bannedwords = document.getElementById("4").value.split(',');
            let creator = JSON.parse(localStorage.getItem('UserDetails')).username;
            console.log(creator)
            
            const data = {
                name: name,
                description: description,
                tags: tags,
                bannedwords: bannedwords,
                creator: creator
            }

            const resp = await fetch("http://localhost:5000/api/subgreddits/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            console.log(data);
        }
    );

    const subgpass = (e) => {
        e.preventDefault();
        let name = document.getElementById("1").value;
        let description = document.getElementById("2").value;
        let tags = document.getElementById("3").value.split(',');
        let bannedwords = document.getElementById("4").value.split(',');

        if (!name || !description) {
            alert("Fields not complete.")
        }
        else {
            response();
            // window.location.reload();
            nav("/profile");
        }
    }

    return (
        <>
            <form onSubmit={subgpass}>
                <div className="form-group">
                    <label htmlFor="exampleFirstName">Subgreddit Name</label>
                    <input type="text" className="form-control" id="1" aria-describedby="emailHelp" placeholder="Enter firstname" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleLastName">Description</label>
                    <input type="text" className="form-control" id="2" placeholder="Enter lastame" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleUserName">Tags</label>
                    <input type="text" className="form-control" id="3" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleEmail">Banned Words</label>
                    <input type="text" className="form-control" id="4" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else ;).</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={subgpass}>Submit</button>
            </form>
        </>
    )

}