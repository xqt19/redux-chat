import React, {Component} from 'react'

class Channel extends Component{

    UNSAFE_componentWillMount=()=>{
        
    }

    render(){
        console.log(this.props.messages)
        return(
            <div>
                <h1> Channel Here Coming Soon </h1>
                <br />
                {this.props.active == null && <h3>No Active Channel!</h3>}
                {this.props.active != null && <h3>This current Active Channel is {this.props.active}</h3>}
                <br />
                <ul>
                {this.props.messages != null &&
                    this.props.messages.map((message,index) => 
                        <li key={index}>{message.content}</li>
                    )
                }                  
                </ul>
 
            </div>
        )
    }
}
import {connect} from'react-redux'
const mapStateToProps = (state)=>{
    return{
        active: state.activechannel,
        messages: state.channelmessages
    }
}
// import {loadChannelMessages} from './ChatActions'
// import {bindActionCreators} from 'redux'
// const mapDispatchToProps =(dispatch)=>{
//     return{
//         getMessages: bindActionCreators(loadChannelMessages, dispatch)
//     }
// }

export default connect(mapStateToProps,null)(Channel)