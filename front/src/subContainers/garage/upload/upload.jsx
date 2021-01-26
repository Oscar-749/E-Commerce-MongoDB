import React from 'react';
import './upload.css';
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Upload = () => {
    // const history = useHistory();
    const handleSubmit = async (event) => {
    //     try{
    //         event.preventDefault();
    //         const form = event.target;
    //         const article = {
    //             name: form.name.value,
    //             price: form.price.value,
    //             text: form.text.value,
    //             product: form.product.value,
    //         }
    //         axios.axios.post('http://localhost:3000/products/', article)
    //         history.push('/garage')
    //         console.log(article);

    //     }catch(error){
    //         console.log(error)
    //     }
    }

    return(
       <form className="upload-file" onSubmit= {handleSubmit}>
        <h1>Subir Artículo</h1>
            <input type = "text" class="form-control" name= "name" placeholder="Nombre"/>
            <input type = "text" class="form-control" name= "price" placeholder="Precio"/>
            <input type = "text" class="form-control" name= "text" placeholder="Descripción"/>
            <input type = "text" class="form-control" name= "text" placeholder="Coche o Pieza"/>

            {/* <button type="submit" class="btn btn-primary">Subir</button> */}
            <NavLink to="/garage" class="btn btn-primary">Subir</NavLink>
        </form>
    )
}

export default Upload