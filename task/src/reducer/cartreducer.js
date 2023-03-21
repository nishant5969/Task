import Item1 from '../images/img1.jpg'
import Item2 from '../images/img2.jpg'
import Item3 from '../images/img3.jpg'
import Item4 from '../images/img4.jpg'
import {ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY} from '../action/actiontypes/cartaction'

const initState = {
    items: [
        {id:1,title:'Mountain Sketch', desc: "It describes moutains and it's stories", price:999,img:Item1},
        {id:2,title:'The Starry Night', desc: "The best painting in the history", price:899,img: Item2},
        {id:3,title:'Landscape Image', desc: "It shows the breathtaking view of nature",price:799,img: Item3},
        {id:4,title:'Blurry Night', desc: "Describes the importance of a night", price:699,img:Item4},
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }

  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
  }

  if(action.type === ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
  }

  if(action.type === SUB_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
  }
  else{
      return state
  }
}
export default cartReducer;