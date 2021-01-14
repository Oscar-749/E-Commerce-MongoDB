import React from 'react';
import './home.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/bandera.jpg';

const Home = () => {
    return(
        <div>
            <img src={img} width="500" height="300" alt="img-bandera"></img>
            <h1>Bienvenido a CarWeb</h1>
            
            <div className="">
                <NavLink to="/login">Iniciar Sesión</NavLink>
                <NavLink to="/register">Registrarse</NavLink>
            </div>
            
        </div>
    )
}

export default Home