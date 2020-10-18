import ActionTypes from '../Actions'
// import data_fetched from '../../src/App'
const initialState = {
    count: 0
}
// console.log(data_fetched)
 function counterReducer(state = initialState,action) {
    switch (action.type) {
        case ActionTypes.INCREASE_COUNT:
            return { count: state.count + 1 }
        case ActionTypes.DECREASE_COUNT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default counterReducer;