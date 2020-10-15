import React, {Component} from 'react'

class ChannelList extends Component{
    // static defaultProps = {
    //     channels: ["A","B","C","D","E"]
    // }
    UNSAFE_componentWillMount=()=>{
        this.props.loadChannelList();
    }
    render(){
        return(
            this.props.channels.map((city,index)=>
                <div key={index} style={{margin: "5px"}}>
                    <button className="btn btn-primary" onClick={()=>this.props.changeChannel(city)}>{city}</button>
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

import {setActiveChannel, setChannelList} from './ChatActions'
import {bindActionCreators} from 'redux'
const mapDispatchToProps =(dispatch)=>{
    return{
        loadChannelList: bindActionCreators(setChannelList,dispatch),
        changeChannel:bindActionCreators(setActiveChannel,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList)