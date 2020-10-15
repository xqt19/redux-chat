const channels = ["Austria", "Berlin", "Canberra", "Tokyo", "Zimbabwe", "peeko"]

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

export const LOADCHANNELMESSAGES ="LOAD_CHANNEL_MESSAGES"
export const loadChannelMessages = (active) =>{
    const url = `https://wagon-chat.herokuapp.com/${active}/messages`
    return fetch(url)
    .then(response =>response.json())
    .then((data)=>{
        return {
            type: LOADCHANNELMESSAGES,
            payload: data.messages
        }
    })
}