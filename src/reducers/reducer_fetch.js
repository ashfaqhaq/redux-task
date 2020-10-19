import { FETCH_DATA} from '../Actions/index'

  export default function(state = [], action) {
    switch (action.type) {
      case FETCH_DATA:
      return [ action.payload.data, ...state ];
    }

    return state;
  }