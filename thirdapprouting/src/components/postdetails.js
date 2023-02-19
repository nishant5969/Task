import React from "react";

const url = "http://localhost:8900/languages";

class PostDetails extends React.Component {
    constructor(){
        super()

        this.state={
            tdetails:''
        }
    }

   componentDidMount(){
    fetch(`${url}/${this.props.match.params.id}`, {method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            tdetails:data
        })
    })
   }

   render(){
      return(
        <div class="panel panel-warning">
          <div class="panel-heading">Panel Header</div>
           <div class="panel-body">
             <div class="jumbotron">
               <h2>{this.state.tdetails.name}</h2>
               <h2>{this.state.tdetails.details}</h2>
             </div>
           </div>
        </div>
      )
   }

}
export default PostDetails;