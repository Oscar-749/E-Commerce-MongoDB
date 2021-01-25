import React from 'react';
import './cars.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cars = () => {
    return(
        <div>
            <div className="main-cars">

                <div className="galeria-coches">

                    <div id="car-uno" className="img-gal">
                        <h5 className="title-cars">Subaru Impreza wrx sti</h5>
                        <br></br>
                        <p>Valencia | Gasolina | 2006 | 31.000 km</p>
                        <p>19.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-dos" className="img-gal">
                        <h5 className="title-cars">Seat Leon Cupra</h5>
                        <br></br>
                        <p>Tarragona | Gasolina | 2016 | 27.000 km</p>
                        <p>25.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-tres" className="img-gal">
                        <h5 className="title-cars">Ford Focus RS</h5>
                        <br></br>
                        <p>Valencia | Gasolina | 2017 | 42.000 km</p>
                        <p>32.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-cuatro" className="img-gal">
                        <h5 className="title-cars">Toyota GR Yaris</h5>
                        <br></br>
                        <p>Madrid | Gasolina | 2021 | 680 km</p>
                        <p>19.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-cinco" className="img-gal">
                        <h5 className="title-cars">BMW X5</h5>
                        <br></br>
                        <p>Barcelona | Diesel | 2013 | 136.000 km</p>
                        <p>19.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-seis" className="img-gal">
                        <h5 className="title-cars">Citroen C4</h5>
                        <br></br>
                        <p>Castellon | Gasolina | 2010 | 47.000 km</p>
                        <p>6.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-siete" className="img-gal">
                        <h5 className="title-cars">Golf mk5</h5>
                        <br></br>
                        <p>Madrid | Gasolina | 2014 | 68.000 km</p>
                        <p>13.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-ocho" className="img-gal">
                        <h5 className="title-cars">Honda Accord</h5>
                        <br></br>
                        <p>Sevilla | Gasolina | 2009 | 160.000 km</p>
                        <p>3.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-nueve" className="img-gal">
                        <h5 className="title-cars">KIA Sportage</h5>
                        <br></br>
                        <p>Tarragona | Gasolina | 2017 | 22.000 km</p>
                        <p>24.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-diez" className="img-gal">
                        <h5 className="title-cars">Ford Kuga</h5>
                        <br></br>
                        <p>Valencia | Gasolina | 2016 | 46.000 km</p>
                        <p>17.500€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-once" className="img-gal">
                        <h5 className="title-cars">Nissan Navara</h5>
                        <br></br>
                        <p>Galicia | Diesel | 2016 | 53.000 km</p>
                        <p>24.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-doce" className="img-gal">
                        <h5 className="title-cars">Nissan Qashqai</h5>
                        <br></br>
                        <p>Barcelona | Gasolina | 2016 | 74.000 km</p>
                        <p>19.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-trece" className="img-gal">
                        <h5 className="title-cars">Porche 911</h5>
                        <br></br>
                        <p>Madrid | Gasolina | 2017 | 16.000 km</p>
                        <p>62.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-catorce" className="img-gal">
                        <h5 className="title-cars">Range Rover Explorer</h5>
                        <br></br>
                        <p>Madrid | Diesel | 2015 | 81.000 km</p>
                        <p>42.000€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>

                    <div id="car-quince" className="img-gal">
                        <h5 className="title-cars">Opel Zafira</h5>
                        <br></br>
                        <p>Murcia | Diesel | 2007 | 230.000 km</p>
                        <p>3.700€</p>
                        <NavLink className="btn btn-primary" to="/detailscars">Detalles</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cars