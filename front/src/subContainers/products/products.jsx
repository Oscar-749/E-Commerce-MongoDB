import React, {useEffect, useState} from 'react';
import './products.css';
import axios from 'axios';
import Piece from '../pieces/pieces';
import Car from '../cars/cars';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = (props) => {
    const productsType =props.productsType || 'coche';
    const [products,setProducts] = useState([]);
    useEffect(async () => {
        const data= await axios.get(`http://localhost:3000/products/filter?product=${productsType}`)
        .then(res => res)
        .catch(console.error); 
        setProducts(data.data);
    },[])

    return(
        <div className="list-articles">
            {
                (productsType =='pieza')?
                (products?.map((piece, index) =><Piece piece={piece}/>)):
                (products?.map((car, index) =><Car car={car}/>)) 
            }
        </div>
    )
}

export default Products