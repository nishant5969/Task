import React from "react";
import { connect } from 'react-redux';
import {addToCart} from '../action/index'
import "./shopping.css";


class Shopping extends React.Component{

    handleonClick = (id) => {
         this.props.addToCart(id);
    }
    render(){
       
        let itemslist = this.props.items.map(item => {
            return(
                <div className="col-md-4" key={item.id}>
                     <div className="thumbnail">
                            <img src={item.img} alt={item.title}/>
                            <span className="title">{item.title}</span>
                        
                     </div>

                     <div className="caption">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} INR</b></p>
                     </div>

                     <div>
                        <button className="add-button" onClick={()=>{this.handleonClick(item.id)}}>Add To Cart</button>
                     </div>
                </div>
            )
        })
        return(
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="row">
                {itemslist}
            </div>
        </div>
        )
    }
}

function mapStatetoProps(state){
    console.log(state)
    return{
      items:state.items
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}


export default connect(mapStatetoProps,mapDispatchToProps)(Shopping);

