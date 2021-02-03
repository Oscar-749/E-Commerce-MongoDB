import React from 'react';
import './upload.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
//import {notification} from 'antd';

const Upload = (props) => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const form = event.target;
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: token}
            };
            const article = {
                name: form.name.value,
                price: form.price.value,
                text: form.text.value,
                product: form.product.value,
            }
            const res = await axios.post('http://localhost:3000/products', article, config)
            //notification.success({message:'Artículo subido correctamente'})
            history.push('/garage')
        }catch(error){
            console.log(error);
        }
    }
    return(
       <form className="upload-file" onSubmit= {handleSubmit}>
        <h1>Subir Artículo</h1>
            <input type = "text" class="form-control" name= "name" placeholder="Nombre"/>
            <input type = "text" class="form-control" name= "price" placeholder="Precio"/>
            <input type = "text" class="form-control" name= "text" placeholder="Descripción"/>
            <select name="">
                <option>coche</option>
                <option>pieza</option>
            </select>

            <button type="submit" class="btn btn-primary">Subir</button>
        </form>
    )
}

export default Upload