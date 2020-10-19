import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const initialState = {
    fetching: false,
    fetched: false,
    posts: []
};

const reducer = function (state = initialState, actions) {
    // eslint-disable-next-line default-case
    switch (actions.type) {
        case "FETCH": {
            return { ...state, fetching: true }
        }
        case "FETCH_COMPLETE": {
           return { ...state, name: actions.payload , fetching:false, fetched:true }

        }
        case "FETCH_ERROR": {
            return { ...state, fetching: false , error:action.payload }
        }
    }

    return state;
};

const middleware = applyMiddleware(thunk,logger());
const store = createStore(reducer, middleware)




const tweetsReducer = function (state = {}, actions) {
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

// const store = createStore(reducers,{
//     user:{
//         name:"weilsd",
//         age:28
//     }
// })

store.subscribe(() => {
    console.log("store value updated", store.getState())
})

store.dispatch((dispatch) => {
    dispatch({ type: "FETCH" })
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // const title = data.title.map((title) => num.title);
            const body = [];
            // const title = [];
            // const body = [];
            // const body = [];
            // const body = [];

            for (var i = 0; i < data.length; i++) {
                // body.push(data[i]) 
                body.push(data[i])

                //    title.push(data[i].title)
            }
            var result = body.map(function (el) {
                var o = Object.assign({}, el);
                o.like = 0;
                o.dislike = 0;
                return o;
            })
            dispatch({ type: "FETCH_COMPLETE", payload: result })
        })
        .catch((err)=>{
            dispatch({type:"FETCH_ERROR",payload:err})
        })
})