import {USER_A_DETAILS} from '../types/types'
const initialState = {
    userADetails:{}
}

const reducers=(state = initialState, action)=>{
    switch(action.type){
        case USER_A_DETAILS:
            console.log(action.payload.data);
            return{...state, userADetails: action.payload.data};
        default:
            return state;
    }
}

export default reducers;