import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = (props) => {
    return(
        <header className="header">
            <NavLink to="/"> Header</NavLink>

            <div className="user">

            </div>
        </header>
    )
}

export default Header