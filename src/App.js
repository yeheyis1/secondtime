import React from 'react'
import {BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../src/Home/Home';
import About from '../src/About/About'
import Contact from '../src/Contact/Contact'
import Header from '../src/Header/Header'
import Body from '../src/body/body'
import Footer from '../src/Footer/Footer'

class App extends  React.Component{
    render(){
        return(

             <BrowserRouter>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             
             </BrowserRouter>
        )
    }
}



export default App;


