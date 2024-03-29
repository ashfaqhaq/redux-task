import Item1 from '../images/Item1.jpg'
import Item2 from '../images/Item2.jpg'
import Item3 from '../images/Item3.jpg'
import Item4 from '../images/Item4.jpg'
import Item5 from '../images/Item5.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../Actions/action-types/cart-actions'

console.log("Redicer console")

const initState = {
    items: [
        {id:1,title:'Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:300,calories:1000,img:Item1,inCart:false,quant:0},
        {id:2,title:'Pasta', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:360,calories:900,img: Item2,inCart:false,quant:0},
        {id:3,title:'Grill Sandwich', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:80,calories:450,img: Item3,inCart:false,quant:0},
        {id:4,title:'Noodle', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:120,calories:550,img:Item4,inCart:false,quant:0},
        {id:5,title:'Cake', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:500,calories:3000,img: Item5,inCart:false,quant:0}
    ],
    addedItems:[],
    total: 0,
    cartItems :0

}
const cartReducer= (state = initState,action)=>{
    console.log(state)
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
            state.cartItems += 1
            console.log(state.cartItems)
            // state.quant += 1 
            // state.items.action.id.inCart =true;
             return{
                ...state,
                 total: state.total + addedItem.price,
                
                
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            // state.quant += 1 
            state.cartItems += 1
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
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        // state.quant -= 1 
        state.cartItems -= itemToRemove.quantity
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
            
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          state.quant += 1 
         
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            // state.quant -= 1 
            state.cartItems -= 1
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            // state.quant -= 1 
            state.cartItems -= 1
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

export default cartReducer