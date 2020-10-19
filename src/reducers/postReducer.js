// import Actions from "../Actions";

import { bindActionCreators } from "redux";

const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error:null
};

 const reducer = function (state = initialState, actions) {
    let value;
    // eslint-disable-next-line default-case
    switch (actions.type) {
        case "FETCH": {
            return { ...state, fetching: true }
        }
        case "FETCH_COMPLETE":
          console.log("wWWeee")  
        
            
           return { ...state, posts: actions.payload , fetching:false, fetched:true }

        
        case "FETCH_ERROR": {
            return { ...state, fetching: false , error:actions.payload }
        }
        
        case "LIKE_POST":
            console.log('worling');
        // console.log(actions.payload.like)
        // console.log(state[actions.payload])
        value = actions.payload ;
        // const 
        // var current_state = [...state , {actions.payload.like:value}] ;
         
         value.like= value.like+1;
         value.liked= true;
         console.log(value)
        return {
          ...state,
          };
      case 'UNLIKE_POST':
        value = actions.payload ;
        // const 
        // var current_state = [...state , {actions.payload.like:value}] ;
         
         value.like= value.like-1;
         value.liked= false;
         console.log(value)
        return {
          ...state,
          };
      default:
        return state;
       
    }

    
};


export default reducer;