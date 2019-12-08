import { 
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS, 
} from '../actions/countries';

let initialState = {
  data: [],
  isLoading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        isLoading: true,
      }
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}
