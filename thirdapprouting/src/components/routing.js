import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './home';
import Profile from './profile';
import Forms from './forms';
import Posts from './posts';
import PostDetails from './postdetails';



class Routing extends React.Component{
    render(){
       return(
        <Router>
           <div>
             <header>
             <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                 <Link to="/" class="navbar-brand" >React Application</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/forms">Forms</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
              </div>
             </nav>
             </header>
            <Routes> 
               <Route exact path="/" element={<Home/>}></Route>
               <Route exact path="/forms" element={<Forms/>}></Route>
               <Route exact path="/profile" element={<Profile/>}></Route>
               <Route exact path="/posts" element={<Posts/>}></Route>
               <Route exact path="/posts/:topic" element={<PostDetails/>}></Route>
               
            </Routes> 
           </div> 
        </Router>
       )
    }
}

export default Routing;