import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        props.setUser(null)
    }

    return(
        <header className="header">
             <NavLink to="/">WebCar</NavLink>

            <div className="user">
                <div className="user">
                    {props.user ?
                        <>
                        <NavLink to="/garage">Garaje</NavLink>

                        <NavLink to="/profile">
                            <span>{props.user?.username}</span>
                        </NavLink>

                        <NavLink to="/">
                            <span onClick={logout}>Cerrar Sesión</span>
                        </NavLink>
                        </> :

                        <>
                        <NavLink to="/login">Iniciar Sesión</NavLink>
                        
                        <NavLink to="/register">Registro</NavLink>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header