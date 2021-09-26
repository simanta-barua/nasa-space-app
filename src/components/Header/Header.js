import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand ms-5" href="/"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2  mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/members">Members</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="/">Missions</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                        <form className="d-flex w-50 mx-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="banner text-center">
                <h1>NASA Space Apps Program</h1>
                <p>Hiring Best Programmer Word Wide</p>
                <h4>Total Budget 300 Millions USD</h4>
            </div>
        </div>
    );
};

export default Header;