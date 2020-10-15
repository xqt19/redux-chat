import {SETCHANNELLIST,SETACTIVECHANNEL} from './ChatActions'

export const chatReducer = (state=[], action) =>{
    switch(action.type){
        case SETCHANNELLIST:
            return action.payload
        default:
            return state
    }
}

export const activeChannelReducer =(state=null, action)=>{
    switch (action.type){
        case SETACTIVECHANNEL:
            return action.payload
        default:
            return state
    }
}