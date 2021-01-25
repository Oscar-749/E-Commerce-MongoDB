import React from 'react';
import './garage.css';
//import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Garage = () => {
    return(
        <div>
            <div className="main-garage">
                <div className="info">

                </div>

                <div className="en-venta">
                    <h6>En Venta</h6>
                </div>

                <div className="comprados">
                    <h6>Comprados</h6>
                </div>
            </div>
        </div>
    )
}

export default Garage