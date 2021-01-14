import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from './components/header/header';
import Home from './containers/home/home';
import Register from './containers/register/register';
import Login from './containers/login/login';

function App() {
  const [user, setUser] = useState(null);
  return (
    
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
