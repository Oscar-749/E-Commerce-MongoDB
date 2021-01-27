import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

import Header from './components/header/header';
import Portada from './containers/portada/portada';
import Home from './containers/home/home';
import Register from './containers/register/register';
import Login from './containers/login/login';
import Profile from './containers/profile/profile';
import Garage from './subContainers/garage/garage';
import upload from './subContainers/garage/upload/upload';
import Products from './subContainers/products/products';
import DetailsProducts from './subContainers/detailCar/detailCar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      axios.get('',{headers:{Authorization:token}})
      .then(res => setUser(res.data))
    }
  }, [])

  return (
    <BrowserRouter>
      <Header user ={user} setUser={setUser}/>

      <Switch>
        <Route path="/" component={Portada} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/upload" component={upload} exact/>
        <Route path="/garage" component={Garage} exact/>
        
        <Route path="/cars" render={(props)=><Products productsType="coche"></Products>} exact/>
        <Route path="/pieces" render={(props)=><Products productsType="pieza"></Products>} exact/>
        <Route path="/detailcar" render={(props)=><DetailsProducts detailsType="coche"></DetailsProducts>} exact/>
        <Route path="/detailpiece" render={(props)=><DetailsProducts detailsType="pieza"></DetailsProducts>} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;