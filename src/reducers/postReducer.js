// import Actions from "../Actions";

const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error:null
};

 const reducer = function (state = initialState, actions) {
    // eslint-disable-next-line default-case
    switch (actions.type) {
        case "FETCH": {
            return { ...state, fetching: true }
        }
        case "FETCH_COMPLETE": {
           return { ...state, posts: actions.payload , fetching:false, fetched:true }

        }
        case "FETCH_ERROR": {
            return { ...state, fetching: false , error:actions.payload }
        }
    }

    return state;
};

export default reducer;