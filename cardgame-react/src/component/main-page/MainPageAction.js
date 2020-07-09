export const ENTER_PLAYER1 = 'ENTER_PLAYER1'
export const ENTER_PLAYER2 = 'ENTER_PLAYER2'
export const ENTER_PLAYER3 = 'ENTER_PLAYER3'
export const ENTER_PLAYER4 = 'ENTER_PLAYER4'

export const enterPlayer1 = (value) => {
    return{
        type : ENTER_PLAYER1,
        payload : value
    }
}

export const enterPlayer2 = (value) => {
    return{
        type : ENTER_PLAYER2,
        payload : value
    }
}

export const enterPlayer3 = (value) => {
    return{
        type : ENTER_PLAYER3,
        payload : value
    }
}

export const enterPlayer4 = (value) => {
    return{
        type : ENTER_PLAYER4,
        payload : value
    }
}