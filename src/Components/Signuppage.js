import React from 'react';

export default function Signup(props) {

    const userpass = (e) => {
        e.preventDefault();
    };

    if (props.sinner === "signup") {
        return (
            <div className="container">
                <form onSubmit={userpass}>
                    <div className="form-group">
                        <label htmlFor="exampleFirstName">First Name</label>
                        <input type="name" className="form-control" id="exampleFirstName" aria-describedby="emailHelp" placeholder="Enter firstname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleLastName">Last Name</label>
                        <input type="name" className="form-control" id="exampleLastName" placeholder="Enter lastame" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleUserName">User Name</label>
                        <input type="username" className="form-control" id="exampleUserName" aria-describedby="emailHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleEmail">Email-ID</label>
                        <input type="email" className="form-control" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else ;).</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleAge">Age</label>
                        <input type="number" className="form-control" id="exampleAge" aria-describedby="emailHelp" placeholder="Enter Age" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleContactNum">Contact Number</label>
                        <input type="number" className="form-control" id="exampleContactNum" aria-describedby="emailHelp" placeholder="Eg: 8860778273" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
    else return;
}