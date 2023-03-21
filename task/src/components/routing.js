import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ValidateForm from './loginform';
import Shopping from './shopping';
import Cart from './cart';

class Routing extends React.Component{
    render(){
        return(
            <Router>
            <header>
             <nav className="navbar navbar-default">
              <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to="/loginform">Login Form</Link></li>
                    <li><Link to="/shopping">SHOPPING</Link></li>
                    <li><Link to="/cart">CART</Link></li>
                </ul>
              </div>
             </nav>
            </header>

            <Routes> 
               <Route exact path="/" element={<ValidateForm/>}></Route>
               <Route exact path="/loginform" element={<ValidateForm/>}></Route>
               <Route exact path="/shopping" element={<Shopping/>}></Route>
               <Route exact path="/cart" element={<Cart/>}></Route>
            </Routes>
            </Router>
        )
    }
}

export default Routing;