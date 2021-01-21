import React from 'react';
import './home.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    return(
        <div>
            <div className="principal">
            <h1 className="titulo_home"></h1>
                <div className="main">                 
                    <NavLink to="/cars" className="coches">
                        <h2>Coches</h2>
                    </NavLink>
                    
                    <NavLink to="/pieces" className="piezas">
                        <h2>Piezas</h2>
                    </NavLink>
                         
                    <NavLink to="/garage" className="garaje">
                        <h2>Garaje</h2>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home