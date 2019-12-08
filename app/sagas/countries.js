import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as countriesActions from '../actions/countries'
import { getCountriesApi } from '../requests/countries';

export function* getCountries(action) {
  // try {
    const regionId = action.data
    const response = yield call(getCountriesApi, regionId)
    yield put({ type: countriesActions.GET_COUNTRIES_SUCCESS, data: response.data })
  // } catch(error) {
  //   yield put({ type: countriesActions.GET_COUNTRIES_FAIL, error })
  // }
}

export default all([
  takeLatest(countriesActions.GET_COUNTRIES, getCountries),
])
