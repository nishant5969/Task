import React from 'react';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity } from '../action/index';

class Cart extends React.Component{


    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price} INR</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <button onClick={()=>{this.handleAddQuantity(item.id)}}>+</button>
                                            <button onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</button>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
        return(
            <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>  
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);