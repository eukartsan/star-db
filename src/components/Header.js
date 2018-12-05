import React from 'react';

import './style.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">Starship</a>
                </li>
                <li>
                    <a href="#">Vehicles</a>
                </li>
                <li>
                    <a href="#">Films</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;