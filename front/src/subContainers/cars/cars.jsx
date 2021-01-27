import React from 'react';
import './cars.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Car = ({car}) => {
    return(
        <div className="main-cars">
            <h6>{car.name}</h6>
            <p>{car.price}</p>
            <NavLink to="/detailcar" className="btn btn-primary">Detalles</NavLink>          
        </div>
    )
}

export default Car