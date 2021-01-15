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
             <NavLink to="/home">CarWeb</NavLink>

            <div className="user">
                <div className="user">
                    {props.user ?
                        <>
                        <span>{props.user?.username}</span>
                        <NavLink to="/">
                            <span onClick={logout}>Cerrar Sesión</span>
                        </NavLink>
                            
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