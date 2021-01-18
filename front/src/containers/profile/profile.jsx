import React from 'react';
import './profile.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Profile = () => {
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
            await axios.post('http://localhost:3000/users/update/:id', user)
            //notification.success({message:'Usuario registrado correctamente'})
            history.push('/home')
        }catch(error){
            console.log(error)
            //notification.error({message: 'Error al registrarte'})
        }
    }

    return(
       <form className="profile" onSubmit= {handleSubmit}>
        <h1>Perfil</h1>
            <input type = "text" class="form-control" name= "name" placeholder="Nombre"/>
            <input type = "text" class="form-control" name= "surname" placeholder="Apellido"/>
            <input type = "text" class="form-control" name= "username" placeholder="Nombre usuario"/>
            <input type = "email" class="form-control" name= "email" placeholder="Correo electrónico"/>
            <input type = "password" class="form-control" name= "password" placeholder="Contraseña"/>

            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="submit" class="btn btn-primary">Eliminar cuenta</button>
        </form>
    )
}

export default Profile