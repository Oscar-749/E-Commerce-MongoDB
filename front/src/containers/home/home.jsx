import React from 'react';
import './home.css';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className="principal">
                <div className="main">

                    <NavLink to="/cars" className="coches">
                        <h2>Coches</h2>
                    </NavLink>
                    
                    <NavLink to="/pieces" className="piezas">
                        <h2>Piezas</h2>
                    </NavLink>

                </div>
        
            </div>
        </div>
    )
}

export default Home