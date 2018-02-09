import * as types from './actionTypes'
import axios from 'axios'
import * as keys from '../../secret.js'

export function getTrendingGifs() {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?',
      params: {
        limit: '20',
        rating: 'PG',
        api_key: keys.GIPHY_KEY
      }
    }).then(
      (response) => {
        dispatch({  
          type: types.GET_TRENDING_GIFS,
          payload: response.data,
        })
    }).catch(
      (error) => {
        dispatch({
          type: types.ERROR_GETTING_GIFS,
          payload: error.message
        })
      }
    )
  }
}

export function searchGifs(str) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/search?',
      params: {
        limit: '20',
        rating: 'PG',
        lang: 'en',
        api_key: keys.GIPHY_KEY,
        q: str
      }
    }).then(
      (response) => {
        dispatch({  
          type: types.SEARCH_GIFS,
          payload: {
            results: response.data,
            query: response.config.params.q
          }
        })
    }).catch(
      (error) => {
        dispatch({
          type: types.ERROR_GETTING_GIFS,
          payload: error.message
        })
      }
    )
  }
}

export function previousSearch(str) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/search?',
      params: {
        limit: '20',
        rating: 'PG',
        lang: 'en',
        api_key: keys.GIPHY_KEY,
        q: str
      }
    }).then(
      (response) => {
        dispatch({  
          type: types.PREVIOUS_SEARCH,
          payload: {
            results: response.data
          }
        })
    }).catch(
      (error) => {
        dispatch({
          type: types.ERROR_GETTING_GIFS,
          payload: error.message
        })
      }
    )
  }
}
