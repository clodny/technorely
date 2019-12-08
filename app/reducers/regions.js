import { 
  SELECT_REGION,
  GET_REGIONS,
  GET_REGIONS_SUCCESS, 
} from '../actions/regions';

let initialState = {
  data: [
    {
      id: 'africa',
      name: 'Africa',
    },
    {
      id: 'americas',
      name: 'Americas',
    },
    {
      id: 'asia',
      name: 'Asia',
    },
    {
      id: 'europe',
      name: 'Europe',
    },
    {
      id: 'oceania',
      name: 'Oceania',
    },
  ],
  selected: null,
  isLoading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        isLoading: true,
      }
    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case SELECT_REGION:
      return {
        ...state,
        selected: action.data
      }
    default:
      return state
  }
}
