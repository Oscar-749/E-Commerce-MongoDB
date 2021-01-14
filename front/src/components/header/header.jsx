import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }

    return(
        <header className="header">
            <NavLink to="/">CarWeb</NavLink>

            <div className="user">
            <div className="user">
                {props.user ?
                    <>
                        <span>{props.user?.name}</span>
                        <span onClick={logout}>Cerrar Sesión</span>
                    </> :
                    <>
                    
                    </>
                }
            </div>
            </div>
        </header>
    )
}

export default Header