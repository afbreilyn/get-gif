import * as types from '../actions/actionTypes'
import initialState from './initialState'

export function addToPastSearches(pastSearches, newQuery) {
  return pastSearches.includes(newQuery) ? pastSearches : pastSearches.concat(newQuery)
}

export default function gifReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TRENDING_GIFS:
      return Object.assign({}, state, {
        gifs: action.payload.data
      })

    case types.ERROR_GETTING_GIFS:
      return Object.assign({}, state, {
        error: [action.payload]
      })

    case types.SEARCH_GIFS: 
      return Object.assign({}, state, {
        gifs: action.payload.results.data,
        pastSearches: addToPastSearches(state.pastSearches, action.payload.query)
      })

    case types.PREVIOUS_SEARCH: 
      return Object.assign({}, state, {
        gifs: action.payload.results.data,
      })  

    default:
      return state
  }
}
