import React, {Component} from 'react'

class ChannelList extends Component{
    render(){
        return(
            <ul>{["A","B","C","D","E"].map((letter)=><li>{letter}</li>)}</ul>
        )
    }
}

class Channel extends Component{
    render(){
        return(
            <h1> Channel Here Coming Soon </h1>
        )
    }
}

class ChatApp extends Component {
    constructor (props){
        super (props)
    }

    render(){
        return(
            <div className="container">
                <div><h1 className="text-center">Wagon Chatroom</h1></div>
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