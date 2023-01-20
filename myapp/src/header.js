import React, {Component} from 'react';
import './header.css'

class Header extends Component{
   
    constructor(){
        super()
            this.state={
                title:'React App',
                keywords:'user input here'
            } 
    }

    inputchange(event){
          console.log(event.target.value)
          this.setState({keywords:event.target.value})
          this.props.newssearch(event.target.value)
    }


    render(){
        return(
            <header>
                <div className='lg'>{this.state.title}</div>
             <center>
                <input type="text" onChange={this.inputchange.bind(this)}></input>
                <p>{this.state.keywords}</p>
             </center>
             <hr/>
        </header>
        )
    }
}

export default Header;

/*
const Header = () =>
{
    return(
        <header>
             <center>
                <h3>React App</h3>
                <input type="text"></input>
             </center>
             <hr/>
        </header>
    )
}
*/