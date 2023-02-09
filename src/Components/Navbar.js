import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Navbar(props) {

    const login = () => {
        props.logger("log");
    }

    const signup = () => {
        props.logger("signup");
    }

    const homey = () => {
        props.logger("home");
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={homey} href="/"><i className="fa fa-home"></i> Greddiit</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                <i className="fa fa-bars"></i> Login or Sign-up
                            </a>
                            <ul className="dropdown-menu">
                                <li><p className="dropdown-item" onClick={login}><i className="fa fa-user-circle" aria-hidden="true"></i> Login</p></li>
                                <li><p className="dropdown-item" onClick={signup}><i className="fa fa-id-card" aria-hidden="true"></i> Sign-up</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </nav>
    );
}