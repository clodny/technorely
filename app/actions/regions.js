import { defaultActionCreator } from './actionCreator';

export const GET_REGIONS = 'GET_REGIONS'
export const GET_REGIONS_SUCCESS = 'GET_REGIONS_SUCCESS'
export const GET_REGIONS_FAIL = 'GET_REGIONS_FAIL'
export const SELECT_REGION = 'SELECT_REGION'
export const getRegions = defaultActionCreator(GET_REGIONS, 'data')
export const getRegionsSuccess = defaultActionCreator(GET_REGIONS_SUCCESS, 'data')
export const getRegionsFail = defaultActionCreator(GET_REGIONS_FAIL, 'error')
export const selectRegion = defaultActionCreator(SELECT_REGION, 'data')