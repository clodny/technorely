import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import countries from './countries'
import regions from './regions'
import history from '../historyHelper'

export default combineReducers({
  router: connectRouter(history),
  countries,
  regions,
})
