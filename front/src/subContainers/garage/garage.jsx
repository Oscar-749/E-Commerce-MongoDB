import React from 'react';
import './garage.css';
import {NavLink} from 'react-router-dom';

const Garage = () => {
    return(
        <div>
            <div className="main-garage">
                <div className="barra1">
                    <h4>Venta</h4>
                    <NavLink className="btn btn-primary" to="/upload">AÑADIR</NavLink>                
                </div>

                <div className="venta">
                    <div className="articles">
                        <h6 className="">Opel Corsa</h6>
                        <p>5.700€</p>
                        <p>Corsa de 2014 con 90.000Km y 110CV</p>
                        <NavLink className="btn btn-primary" to="/upload">Modificar</NavLink>                
                        <button className="btn btn-danger">Eliminar</button>
                    </div>

                    <div className="articles">
                        <h6 className="">Suspension roscada</h6>
                        <p>780€</p>
                        <p>Rosacada regulable en dureza e inclinación</p>
                        <NavLink className="btn btn-primary" to="/upload">Modificar</NavLink>                
                        <button className="btn btn-danger">Eliminar</button>
                    </div>

                    <div className="articles">
                        <h6 className="">Tubo de escape</h6>
                        <p>290€</p>
                        <p>Tubo de escape con silencioso Akrapovic</p>
                        <NavLink className="btn btn-primary" to="/upload">Modificar</NavLink>                
                        <button className="btn btn-danger">Eliminar</button>
                    </div>

                    {/* <div className="articles">
                        <h6 className="">Golf mk4</h6>
                        <p>1.500€</p>
                        <p>Golf 4º generación con 240.000Km y 120CV</p>
                        <NavLink className="btn btn-primary" to="/upload">Modificar</NavLink>                
                        <button className="btn btn-danger">Eliminar</button>
                    </div> */}
                </div>
                
                <h4 className="fav">Favoritos</h4>
                <div className="favorites">
                    <div className="deseados">
                        <h6 className="">Audi A5</h6>
                        <p>17.600€</p>
                        <p>Audi a5 con el paquete S-line de 150CV con 78.000 Km</p>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Garage