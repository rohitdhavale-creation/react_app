import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item mx-3 active">
                                        <NavLink className="nav-link text-dark h5" to="/Home">Home</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/About">About</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Services">Services</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Project">Project</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Blog">Blog</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Product">Product</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Gallary">Gallary</NavLink>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <NavLink className="nav-link text-dark h5" to="/Contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
