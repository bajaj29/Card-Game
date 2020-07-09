import { ENTER_PLAYER1, ENTER_PLAYER2, ENTER_PLAYER3, ENTER_PLAYER4 } from "./MainPageAction"

const initialState = {
    player1 : '',
    player2 : '',
    player3 : '',
    player4 : '',
}

const MainPageReducer = (state = initialState, action) => {
    switch(action.type){
        case ENTER_PLAYER1: return{
            ...state,
            player1 : action.payload
        }
        case ENTER_PLAYER2: return{
            ...state,
            player2 : action.payload
        }
        case ENTER_PLAYER3: return{
            ...state,
            player3 : action.payload
        }
        case ENTER_PLAYER4: return{
            ...state,
            player4 : action.payload
        }
        default: return state
    }
}

export default MainPageReducer