import React from 'react';
import './pieces.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Piece = ({piece}) => {
    return(
        <div>
            <div className="main-pieces">

                <div className="img-pieces">
                    <h6>{piece.name}</h6>
                    <p>{piece.price}</p>
                    <NavLink to="/detailpiece" className="btn btn-primary">Detalles</NavLink>
                </div>
                
            </div>
        </div>
        
    )
}

export default Piece