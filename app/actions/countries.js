import { defaultActionCreator } from './actionCreator';

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'
export const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL'
export const getCountries = defaultActionCreator(GET_COUNTRIES, 'data')
export const getCountriesSuccess = defaultActionCreator(GET_COUNTRIES_SUCCESS, 'data')
export const getCountriesFail = defaultActionCreator(GET_COUNTRIES_FAIL, 'error')