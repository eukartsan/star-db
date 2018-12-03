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
                    <a href="#">Films</a>
                </li>
                <li>
                    <a href="#">Vehicles</a>
                </li>
                <li>
                    <a href="#">Species</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;