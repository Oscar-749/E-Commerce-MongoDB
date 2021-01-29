import React from 'react';
import './login.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
//import {notification} from 'antd';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const res = await axios.post('http://localhost:3000/users/login', {email, password});
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            //notification.success({message:'Has iniciado sesión correctamente'})
            props.setUser(res.data.user)
            history.push('/home')
        }catch(error){
            console.log(error)
            //notification.error({message: 'Error al iniciar sesión'})
        }
        
    }
    return(
        <form className="login" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
            <input type="email" class="form-control" onChange={event=>setEmail(event.target.value)} name="email" placeholder="Correo electrónico"/>
            <input type="password" class="form-control" onChange={event=>setPassword(event.target.value)} name="password" placeholder="Contraseña"/>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
    )
}

export default Login