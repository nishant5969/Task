import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Newslist from './newslist';
import JSON from './db.json';

class App extends Component{
   
   constructor(){
      super()

      this.state = {
         news:JSON,
         filtered:JSON
      }

   }

   filternews(userinput){
         let output = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(userinput) >-1
         })

         this.setState({filtered:output})
   }
   
   render(){
      return(
         <React.Fragment>
             <Header newssearch={(data) => {this.filternews(data)}}></Header>
             <Newslist newsdata={this.state.filtered}></Newslist>
         </React.Fragment>
      )
     }
}

ReactDOM.render(<App/>,document.getElementById('root'))

