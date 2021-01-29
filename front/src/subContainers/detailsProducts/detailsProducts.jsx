import React, {useEffect, useState} from 'react';
import './detailsProducts.css';
import axios from 'axios';
import DetailsCars from '../detailCar/detailCar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsProducts = (props) => {
    const detailsType = props.detailsType || 'coche';
    const [details, setDetails] = useState([]);
    useEffect(async () => {
        const data= await axios.get(`http://localhost:3000/products/filter?product=${detailsType}`)
        .then(res => res)
        .catch(console.error); 
        setDetails(data.data);
    })
    return(
        <div className="list-details">
            {
                (detailsType =='pieza')?
                (details?.map((detailPiece, index) =><DetailPiece piece={detailPiece}/>)):
                (details?.map((detailCar, index) =><DetailCar car={detailCar}/>))
            }
        </div>
    )
}

export default DetailsProducts