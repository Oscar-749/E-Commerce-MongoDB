import React from 'react';
import './cars.css';


const Car = ({car}) => {
    return(
        <div className="main-cars">
            <h6>{car.name}</h6>
            <p>{car.price}</p>
            <button className="btn btn-primary">Detalles</button>
        </div>
    )
}

export default Car