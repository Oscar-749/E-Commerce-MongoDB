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
import Products from './subContainers/products/products';
import Upload from './subContainers/garage/upload/upload';
import DetailProduct from './subContainers/products/detailProduct/detailProduct';

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
        <Route path="/" children={<Home user={user} setUser={setUser}/>} exact/>
        <Route path="/register" children={<Register user={user} setUser={setUser}/>} exact/>
        <Route path="/profile" children={<Profile user={user} setUser={setUser}/>} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        <Route path="/upload" children={<Upload user={user} setUser={setUser}/>} exact/>
        <Route path="/garage" children={<Garage user={user} setUser={setUser}/>} exact/>
        <Route path="/detailcar" component={DetailProduct} exact/>
        
        <Route path="/cars" render={(props)=><Products productsType="coche"></Products>} exact/>
        <Route path="/pieces" render={(props)=><Products productsType="pieza"></Products>} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;