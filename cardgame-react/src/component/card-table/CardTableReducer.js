import { ADD_IMAGES, GET_CARDS_REQUEST, GET_CARDS_SUCCESS, GET_CARDS_FAILURE, GET_RESULT_REQUEST, GET_RESULT_SUCCESS, GET_RESULT_FAILURE, CLEAR_DATA } from "./CardTableAction"

const initialState = {
    cards : [],
    images : [],
    winners : [],
    error : null,
    loading : false 
}

const CardTableReducer = (state = initialState, action) =>{

    switch(action.type){
        case GET_RESULT_REQUEST: return{
            ...state,
            loading : true
        }
        case GET_RESULT_SUCCESS: return{
            ...state,
            loading : false,
            winners : state.winners.concat(action.payload)
        }
        case GET_RESULT_FAILURE: return{
            ...state,
            loading : false,
            error : action.payload
        }
        case GET_RESULT_REQUEST: return{
            ...state,
            loading : true
        }
        case GET_CARDS_REQUEST: return{
            ...state,
            loading : true
        }
        case GET_CARDS_SUCCESS: return{
            ...state,
            loading : false,
            cards : state.cards.concat(action.payload) 
        }
        case GET_CARDS_FAILURE: return{
            ...state,
            loading : false,
            error : action.payload
        }
        case ADD_IMAGES: return{
            ...state,
            images : state.images.concat(action.payload)
        }
        case CLEAR_DATA: return{
            ...state,
            images : [],
            cards : [],
            winners : []
        }
        default: return state
    }
}

export default CardTableReducer