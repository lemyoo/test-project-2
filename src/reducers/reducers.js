import {USER_A_RESPONSES,USER_B_RESPONSES,USER_C_RESPONSES,USER_D_RESPONSES} from '../types/types'
const initialState = {
    userAResponses:{},
    userBResponses:{},
    userCResponses:{},
    userDResponses:{}
}

const reducers=(state = initialState, action)=>{
    switch(action.type){
        case USER_A_RESPONSES:
            return{...state, userAResponses: action.payload.data};
        case USER_B_RESPONSES:
            return{...state, userBResponses: action.payload.data};
        case USER_C_RESPONSES:
            return{...state, userCResponses: action.payload.data};
        case USER_D_RESPONSES:
            return{...state, userDResponses: action.payload.data};
        default:
            return state;
    }
}

export default reducers;