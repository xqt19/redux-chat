import React, {Component} from 'react'

class Dummylist extends Component{
    constructor(props){
        super(props)
    }
    handleClick=()=>{
        this.props.function();
    }
    handleClick2=()=>{
        this.props.function2();
    }
    render(){
        return(
            <div>
                Hello World!
                <p></p>
                <button className="btn btn-primary" onClick={this.handleClick}>Click me for message</button><br></br>
                <button className="btn btn-success" onClick={this.handleClick2}>Click me for default</button>
                <br></br>
                Text: {this.props.text}
            </div>
        )
    }
}

import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
    return{
        text:state.changeMe //all states are controlled in the main index.jsx page!
    }
}
// export default connect(mapStateToProps, null)(Dummylist)


import {bindActionCreators} from 'redux'
import {textDefault, textYo} from './textYo'
const mapDispatchToProps =(dispatch)=>{
    return{
        function: bindActionCreators(textYo, dispatch),
        function2: bindActionCreators(textDefault, dispatch)
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Dummylist)