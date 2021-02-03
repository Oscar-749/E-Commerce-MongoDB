import React from 'react';
import './profile.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
//import {notification} from 'antd';

const Profile = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const form = event.target;
            const userStorage = JSON.parse(localStorage.getItem('user'));
            const user = {
                name: form.name.value,
                surname: form.surname.value,
                username: form.username.value,
                email: form.email.value,
                password: form.password.value,
            }
            await axios.put('http://localhost:3000/users/' + userStorage._id, user)
            //notification.success({message:'Usuario modificado correctamente'})
            history.push('/home')
        }catch(error){
            console.log(error)
            //notification.error({message: 'Error al modificar el usuario'})
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
        
            {/* <form className="delete">
                <button type="submit" to="/home" class="btn btn-danger">Eliminar cuenta</button>
            </form> */}
        </form>

    )
}

export default Profile