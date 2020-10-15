import React, {Component} from 'react'

class ChannelList extends Component{
    // static defaultProps = {
    //     channels: ["A","B","C","D","E"]
    // }
    UNSAFE_componentWillMount=()=>{
        this.props.loadChannelList();
    }
    handleClick = (city) => {
        this.props.changeChannel(city)
        this.props.getMessages(city)
    }
    render(){
        return(
            this.props.channels.map((city,index)=>
                <div key={index} style={{margin: "5px"}}>
                    <button className="btn btn-primary text-center" style={{width:"50%"}} onClick={()=>this.handleClick(city)}>{city}</button>
                    <br />
                </div>
            )
            
        )
    }
}

import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
    return {
        channels: state.channellist
    }
}

import {setActiveChannel, setChannelList, loadChannelMessages} from './ChatActions'
import {bindActionCreators} from 'redux'
const mapDispatchToProps =(dispatch)=>{
    return{
        loadChannelList: bindActionCreators(setChannelList,dispatch),
        changeChannel:bindActionCreators(setActiveChannel,dispatch),
        getMessages: bindActionCreators(loadChannelMessages, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList)