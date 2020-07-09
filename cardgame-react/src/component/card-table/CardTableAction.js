import Axios from "axios"

export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE'
export const GET_RESULT_REQUEST = 'GET_RESULT_REQUEST'
export const GET_RESULT_SUCCESS = 'GET_RESULT_SUCCESS'
export const GET_RESULT_FAILURE = 'GET_RESULT_FAILURE'
export const ADD_IMAGES = 'ADD_IMAGES'
export const CLEAR_DATA = 'CLEAR_DATA'

const randomCardsRequest = () => {
    return{
        type: GET_CARDS_REQUEST
    }
}

const randomCardsSuccess = (value) => {
    return{
        type: GET_CARDS_SUCCESS,
        payload: value
    }
}

const randomCardsFailure = (value) => {
    return{
        type: GET_CARDS_FAILURE,
        payload: value
    }
}

const getResultRequest = () => {
    return{
        type: GET_RESULT_REQUEST
    }
}

const getResultSuccess = (value) => {
    return{
        type: GET_RESULT_SUCCESS,
        payload: value
    }
}

const getResultFailure = (value) => {
    return{
        type: GET_RESULT_FAILURE,
        payload: value
    }
}

export const getCards = () => {
    return (dispatch) => {
        dispatch(randomCardsRequest());
        Axios.get('http://localhost:8080/api/cardgame/cards')
        .then(response => {
            dispatch(randomCardsSuccess(response.data));
          })
        .catch(error => {
        dispatch(randomCardsFailure(error));
        });
    }
}

export const getResult = (value) => {
    return (dispatch) => {
        dispatch(getResultRequest());
        Axios.post('http://localhost:8080/api/cardgame/result', value)
        .then(response => {
            dispatch(getResultSuccess(response.data));
          })
        .catch(error => {
        dispatch(getResultFailure(error));
        });
    }
}

export const addImages = (value) => {
    return{
        type :  ADD_IMAGES,
        payload : value
    }
}

export const clearData = () => {
    return{
        type :  CLEAR_DATA
    }
}