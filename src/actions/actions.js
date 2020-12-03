import {USER_A_RESPONSES,USER_B_RESPONSES,USER_C_RESPONSES,USER_D_RESPONSES,
DIFFERENCE_IN_B,DIFFERENCE_IN_C,DIFFERENCE_IN_D} from '../types/types'

export const zValueOfB=(data)=>{
    return{
        type: DIFFERENCE_IN_B,
        payload:{
            data: data
        }
    }
}
export const zValueOfC=(data)=>{
    return{
        type: DIFFERENCE_IN_C,
        payload:{
            data: data
        }
    }
}

export const zValueOfD=(data)=>{
    return{
        type: DIFFERENCE_IN_D,
        payload:{
            data: data
        }
    }
}

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