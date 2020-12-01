import {USER_A_DETAILS} from '../types/types'

export const updateUserAState=(data)=>{
    return{
        type: USER_A_DETAILS,
        payload:{
            data: data
        }
    }
}