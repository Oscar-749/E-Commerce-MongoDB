import React from 'react';
import './pieces.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pieces = () => {
    return(
        <div>
            <div className="main-piezas">
                <div className="galeria-piezas">

                    <div id="pieza-uno" className="img-piezas">
                        <h5 className="title-articles">Aleron de fibra</h5>
                        <br></br>
                        <p>Valencia</p>
                        <p>350€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>

                    </div>

                    <div id="pieza-dos" className="img-piezas">
                        <h5 className="title-articles">Llantas BBS goldSpace de 17"</h5>
                        <br></br>
                        <p>Madrid</p>
                        <p>980€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-tres" className="img-piezas">
                        <h5 className="title-articles">Llantas BBS gold-5 de 19"</h5>
                        <br></br>
                        <p>Madrid</p>
                        <p>1.100€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-cuatro" className="img-piezas">
                        <h5 className="title-articles">Capo fibra carbono</h5>
                        <br></br>
                        <p>Galicia</p>
                        <p>400€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-cinco" className="img-piezas">
                        <h5 className="title-articles">Faros delanteros BMW M5</h5>
                        <br></br>
                        <p>Tarragona</p>
                        <p>500€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-seis" className="img-piezas">
                        <h5 className="title-articles">Muelles delanteros FOX</h5>
                        <br></br>
                        <p>Alicante</p>
                        <p>300€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-siete" className="img-piezas">
                        <h5 className="title-articles">Llantas O.Z opac de 16"</h5>
                        <br></br>
                        <p>Sevilla</p>
                        <p>1.600€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-ocho" className="img-piezas">
                        <h5 className="title-articles">Llantas O.Z black de 18"</h5>
                        <br></br>
                        <p>Asturias</p>
                        <p>1.000€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-nueve" className="img-piezas">
                        <h5 className="title-articles">Llantas O.Z white-rally de 17"</h5>
                        <br></br>
                        <p>Madrid</p>
                        <p>1.100</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-diez" className="img-piezas">
                        <h5 className="title-articles">Pomo Sparco Edition Airplane</h5>
                        <br></br>
                        <p>Bilbao</p>
                        <p>25€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-once" className="img-piezas">
                        <h5 className="title-articles">Pomo Sparco Mini</h5>
                        <br></br>
                        <p>Murcia</p>
                        <p>45€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-doce" className="img-piezas">
                        <h5 className="title-articles">Suspension roscada Azules</h5>
                        <br></br>
                        <p>Madrid</p>
                        <p>890€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-trece" className="img-piezas">
                        <h5 className="title-articles">Suspension roscada Rojos</h5>
                        <br></br>
                        <p>Valladolid</p>
                        <p>677€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-catorce" className="img-piezas">
                        <h5 className="title-articles">Volante Sparco Edition Rally</h5>
                        <br></br>
                        <p>Madrid</p>
                        <p>50€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                    <div id="pieza-quince" className="img-piezas">
                        <h5 className="title-articles">Volante OMP tres radios</h5>
                        <br></br>
                        <p>Albacete</p>
                        <p>64€</p>
                        <NavLink className="btn btn-primary" to="/detailspieces">Detalles</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pieces