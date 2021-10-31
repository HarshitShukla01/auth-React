import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
            <PrivateRoute path="/" exact ><Home/></PrivateRoute>
            <PrivateRoute path="/contact" exact> <Contact/></PrivateRoute>
            <Route path="/login" exact><Login/></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App

