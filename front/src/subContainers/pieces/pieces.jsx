import React from 'react';
import './pieces.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Piece = ({piece}) => {
    return(
        <div className="main-pieces">
            <h6>{piece.name}</h6>
            <p>{piece.price}</p>
            <button className="btn btn-primary">Detalles</button>
        </div>
    )
}

export default Piece