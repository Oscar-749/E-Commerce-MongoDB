import React from 'react';
import './detailsCars.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const detailsCars = (prop) => {

    return(
        <div>
            <div className="main-details-cars">
                <div className="coche">
                    <h5>Subaru Impreza WRX</h5>
                    <p>19.000€</p>
                </div>

                <div className="especificaciones">
                    <div>2006</div>
                    <div>31.000 Km</div>
                    <div>Valencia</div>
                    <div>Manual</div>
                    <div>288CV</div>
                    <div>Azul</div>
                    <div>5 plazas</div>
                    <div>5 puertas</div>
                </div>

                <div className="comentarios">
                    <h6>COMENTARIOS DE ANUNCIANTE</h6>
                    <ul>
                        <li>Correa de distribucion hecha</li>
                        <li>Filtros nuevos</li>
                        <li>Llantas de aluminio</li>
                        <li>Pastillas cambiadas, solo 800Km</li>
                    </ul>
                </div>

                <div className="caracteristicas">
                    <h6>CARACTERÍSTICAS GENERALES</h6>
                    <div>Tamaño</div>
                    <div>Peso</div>
                    <div>Maletero</div>
                    <div>Deposito</div>
                    <div>Velocidad Máxima</div>
                    <div>Aceleración</div>
                    <div>Consumo</div>
                </div>
            </div>
        </div>
    )
}

export default detailsCars