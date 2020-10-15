import {SETCHANNELLIST,SETACTIVECHANNEL,LOADCHANNELMESSAGES, UPDATEINPUT, UPDATENAME} from './ChatActions'

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

export const channelMessagesReducer = (state=null, action)=>{
    switch (action.type){
        case LOADCHANNELMESSAGES:
            return action.payload
        default:
            return state
    }
}

export const inputBarReducer = (state="Hello!", action)=>{
    switch (action.type){
        case UPDATEINPUT:
            return action.payload
        default:
            return state
    }
}
export const nameBarReducer = (state="Anonymous", action)=>{
    switch (action.type){
        case UPDATENAME:
            return action.payload
        default:
            return state
    }
}