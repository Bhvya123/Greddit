import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Follows from './Follows';
import Followers from './Followers';
import UserProfile from './UserProfile';

export default function ProfilePage(props) {

    const [fols, setfols] = useState(false);
    const [folrs, setfolrs] = useState(false);
    const [usef, setuse] = useState(true);

    const nav = useNavigate();

    const a = localStorage.getItem("AuthTok");

    const clearKey = () => {
        props.logger("home");
        localStorage.removeItem("AuthTok");
        nav("/");
    }

    const setfollows = () => {
        setfols(true);
        setfolrs(false);
        setuse(false);
    }

    const setfollowers = () => {
        setfolrs(true);
        setfols(false);
        setuse(false);
    }

    const goHome = () => {
        setfolrs(false);
        setfols(false);
        setuse(true);
    }
    if (a) {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <p className="navbar-brand" role="button" onClick={goHome}><i className="fa fa-home"></i> Greddiit</p>
                        <p
                            className="nav-link"
                            role="button"
                            onClick={setfollowers}
                        >
                            <i class="fa fa-users" aria-hidden="true"></i> Followers
                        </p>
                        <p
                            className="nav-link"
                            role="button"
                            onClick={setfollows}
                        >
                            <i class="fa fa-users" aria-hidden="true"></i> Follows
                        </p>
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav d-flex flex-row justify-content-end">
                                <li className="nav-item dropdown">
                                    <p
                                        className="nav-link my-2 my-sm-0"
                                        id="navbarDropdown"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                        <i className="fa fa-user"> admin <i className="fa fa-caret-down" aria-hidden="true"></i></i>
                                    </p>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <p className="dropdown-item" role="button" onClick={clearKey}>Logout</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                </nav>
                <div className='container'>
                    <Follows fols={fols} />
                    <Followers folrs={folrs} />
                    <UserProfile usef={usef}/>
                </div>
            </div>
        )
    }
        else
        {
            return (
                <Navigate to="/"/>
            );
        }
    }