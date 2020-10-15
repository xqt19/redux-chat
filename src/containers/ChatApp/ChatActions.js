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

export const UPDATEINPUT ="UPDATE_INPUT"
export const updateInput = (word) =>{
    return {
        type: UPDATEINPUT,
        payload: word
    }  
}

export const UPDATENAME ="UPDATE_NAME"
export const updateName = (word) =>{
    return {
        type: UPDATENAME,
        payload: word
    }  
}

// export const SUBMITINPUT ="SUBMIT_INPUT"
// export const submitInput = (word) =>{
//     return {
//         type: SUBMITINPUT,
//         payload: word
//     }  
// }