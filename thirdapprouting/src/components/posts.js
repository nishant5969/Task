import React from 'react';
import { Link } from 'react-router-dom';

const url = "http://localhost:8900/languages";

class Posts extends React.Component{
   constructor(props){
      super(props)
          this.state={
             topic:''
          }
      
   }

   componentDidMount(){
      fetch(url)
      .then((res) => res.json())
      .then((data) => 
        console.log(data)
      )
   }

    render(){
        return(
          <div className="panel panel-default">
            <div className="panel-heading">Panel Heading</div>
            <div className="panel-body">
              <div className="jumbotron">
               <h2>JavaScrtipt</h2>
               <Link to="/posts/javascript"><button className="btn btn-primary">Details</button></Link>
               <h2>Java</h2>
               <Link to="/posts/java"><button className="btn btn-primary">Details</button></Link>
               <h2>Python</h2>
               <Link to="/posts/python"><button className="btn btn-primary">Details</button></Link>
               </div>
            </div>
        </div>
        )
    }
}
export default Posts;