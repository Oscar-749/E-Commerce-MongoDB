import React from 'react';
import './cars.css';

const Car = ({car}) => {
    
    return(
        <div>
            <div className="main-cars">
    
                <div className="img-cars">
                    <h6>{car.name}</h6>
                    <p>{car.price}</p>
                    <button onClick="" className="btn btn-primary">Detalles</button>          
                </div>
            </div>
        </div>
    )
}

export default Car