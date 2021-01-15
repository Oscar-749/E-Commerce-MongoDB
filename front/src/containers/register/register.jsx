import React from 'react';
import './register.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {notification} from 'antd';

const Register = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                surname: form.surname.value,
                username: form.username.value,
                email: form.email.value,
                password: form.password.value,
            }
            await axios.post('http://localhost:3000/users/register', user)
            //notification.success({message:'Usuario registrado correctamente'})
            history.push('/login')
        }catch(error){
            console.log(error)
            //notification.error({message: 'Error al registrarte'})
        }
    }

    return(
        <form className="register" onSubmit= {handleSubmit}>
        <h1>Registro</h1>
            <input type = "text" class="form-control" name= "name" placeholder="Nombre"/>
            <input type = "text" class="form-control" name= "surname" placeholder="Apellido"/>
            <input type = "text" class="form-control" name= "username" placeholder="Nick"/>
            <input type = "email" class="form-control" name= "email" placeholder="Email"/>
            <input type = "password" class="form-control" name= "password" placeholder="Contraseña"/>

            <button type="submit" class="btn btn-primary">Registrarme</button>
        </form>
    )
}

export default Register