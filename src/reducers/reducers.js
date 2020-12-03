import {USER_A_RESPONSES,USER_B_RESPONSES,USER_C_RESPONSES,USER_D_RESPONSES,
DIFFERENCE_IN_B,DIFFERENCE_IN_C,DIFFERENCE_IN_D} from '../types/types'
const initialState = {
    userAResponses:{},
    userBResponses:{},
    userCResponses:{},
    userDResponses:{},
    differenceB: 0,
    differenceC: 0,
    differenceD: 0
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
        case DIFFERENCE_IN_B:
            return{...state, differenceB: action.payload.data.z};
        case DIFFERENCE_IN_C:
            return{...state, differenceC: action.payload.data.z};
        case DIFFERENCE_IN_D:
            return{...state, differenceD: action.payload.data.z};
        default:
            return state;
    }
}

export default reducers;