import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav id="main-nav">
                    <div className="header-menu">
                        <ul>
                            <li>
                                <Link className="nav-item" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/gif">GIF</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/jpeg">JPEG</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/png">PNG</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    };
}

export default Navbar;