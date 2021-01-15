import React from 'react';
import './home.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    return(
        <header className="sub_header">
            <div>
                <NavLink to="/cars">COCHES</NavLink>
            </div>
            <div>
                <NavLink to="/pieces">PIEZAS</NavLink>
            </div>
            <div>
             <NavLink to="/garage">GARAGE</NavLink>
            </div>
        </header>
    )
}

export default Home