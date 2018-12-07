import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

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
                    <Link to="/people">People</Link>
                </li>
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>
            {/*<ul className="d-flex">*/}
                {/*<li>*/}
                    {/*<a href="#">Starship</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="#">Vehicles</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="#">Films</a>*/}
                {/*</li>*/}
            {/*</ul>*/}
        </div>
    )
}

export default Header