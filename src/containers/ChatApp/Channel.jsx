import React, {Component} from 'react'

class Channel extends Component{
    render(){
        return(
            <div>
                <h1> Channel Here Coming Soon </h1>
                <br />
                {this.props.active == null && <h3>No Active Channel!</h3>}
                {this.props.active != null && <h3>This current Active Channel is {this.props.active}</h3>}
            </div>
        )
    }
}
import {connect} from'react-redux'
const mapStateToProps = (state)=>{
    return{
        active: state.activechannel
    }
}

export default connect(mapStateToProps,null)(Channel)