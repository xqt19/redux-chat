import React, {Component} from 'react'
import ChannelList from './ChannelList'
import Channel from './Channel'

class ChatApp extends Component {
    constructor (props){
        super (props)
    }

    render(){
        return(
            <div className="container">
                <div><h1 className="text-center">Welcome to Redux Chatroom! 💬</h1></div>
                <br />
               <div>
                    <div className="col-sm-4">
                        <ChannelList />
                    </div>
                    <div className="col-sm-8">
                        <Channel />
                    </div>
                </div> 
            </div>
            
        )
    }
}



export default ChatApp