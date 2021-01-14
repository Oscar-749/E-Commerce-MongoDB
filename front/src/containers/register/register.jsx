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
        <h1>Registrarse</h1>
            <input type = "text" name= "name" placeholder="Introduce tu nombre"/>
            <input type = "text" name= "surname" placeholder="Introduce tu apellido"/>
            <input type = "text" name= "username" placeholder="Introduce tu nick"/>
            <input type = "email" name= "email" placeholder="Introduce tu email"/>
            <input type = "password" name= "password" placeholder="Introduce tu contraseña"/>

            <button type="submit">Registrarme</button>
        </form>
    )
}

export default Register