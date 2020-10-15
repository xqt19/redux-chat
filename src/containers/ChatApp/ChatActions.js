const channels = ["Austria", "Berlin", "Canberra", "Tokyo", "Zimbabwe"]

export const SETCHANNELLIST = "SET_CHANNEL_LIST"
export const setChannelList =()=>{
    return {
        type: SETCHANNELLIST,
        payload: channels
    }
}

export const SETACTIVECHANNEL = "SET_ACTIVE_CHANNEL"
export const setActiveChannel =(name)=>{
    return {
        type: SETACTIVECHANNEL,
        payload: name
    }
}