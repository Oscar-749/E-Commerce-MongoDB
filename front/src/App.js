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
import Cars from './subContainers/cars/cars';
import Pieces from './subContainers/pieces/pieces';
import Garage from './subContainers/garage/garage';
import detailsCars from './subContainers/cars/detailsCars/detailsCars';
import detailsPieces from './subContainers/pieces/detailsPieces/detailsPieces';

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
        <Route path="/cars" component={Cars} exact/>
        <Route path="/pieces" component={Pieces} exact/>
        <Route path="/garage" component={Garage} exact/>
        <Route path="/detailscars" component={detailsCars} exact/>
        <Route path="/detailspieces" component={detailsPieces} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;