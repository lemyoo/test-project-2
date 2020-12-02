import {USER_A_RESPONSES,USER_B_RESPONSES,USER_C_RESPONSES,USER_D_RESPONSES} from '../types/types'

export const updateUserAState=(data)=>{
    return{
        type: USER_A_RESPONSES,
        payload:{
            data: data
        }
    }
}

export const updateUserBState=(data)=>{
    return{
        type: USER_B_RESPONSES,
        payload:{
            data: data
        }
    }
}

export const updateUserCState=(data)=>{
    return{
        type: USER_C_RESPONSES,
        payload:{
            data: data
        }
    }
}

export const updateUserDState=(data)=>{
    return{
        type: USER_D_RESPONSES,
        payload:{
            data: data
        }
    }
}