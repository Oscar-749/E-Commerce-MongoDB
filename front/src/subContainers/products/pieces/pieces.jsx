import React from 'react';
import './pieces.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Piece = ({piece}) => {
    return(
        <div>
            <div className="main-pieces">

                <div className="img-pieces">
                    <h6>{piece.name}</h6>
                    <p>{piece.price}</p>
                    <button onClick="" className="btn btn-primary">Detalles</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default Piece