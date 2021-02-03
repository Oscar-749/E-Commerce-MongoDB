import React from 'react';
import './pieces.css';
import {NavLink} from 'react-router-dom';


const Piece = ({piece}) => {
    return(
        <div>
            <div className="main-pieces">

                <div className="img-pieces">
                    <h6>{piece.name}</h6>
                    <p>{piece.price}</p>
                    <NavLink to="/detailcar" className="btn btn-primary">Detalles</NavLink>          
                </div>
                
            </div>
        </div>
        
    )
}

export default Piece