import React from 'react';
import './cars.css';
import {NavLink} from 'react-router-dom';

const Car = ({car}) => {
    
    return(
        <div>
            <div className="main-cars">
    
                <div className="img-cars">
                    <h6>{car.name}</h6>
                    <p>{car.price}</p>
                    <NavLink to="/detailcar" className="btn btn-primary">Detalles</NavLink>          
                </div>
            </div>
        </div>
    )
}

export default Car