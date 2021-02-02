import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

import Header from './components/header/header';
import Home from './containers/home/home';
import Register from './containers/register/register';
import Login from './containers/login/login';
import Profile from './containers/profile/profile';
import Garage from './subContainers/garage/garage';
import upload from './subContainers/garage/upload/upload';
import Products from './subContainers/products/products';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     axios.get('http://localhost:3001/users/profile',{headers:{Authorization:token}})
  //     .then(res => setUser(res.data))
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Header user ={user} setUser={setUser}/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        <Route path="/upload" component={upload} exact/>
        <Route path="/garage" component={Garage} exact/>
        
        <Route path="/cars" render={(props)=><Products productsType="coche"></Products>} exact/>
        <Route path="/pieces" render={(props)=><Products productsType="pieza"></Products>} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;