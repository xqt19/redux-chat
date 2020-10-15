import React, {Component} from 'react'

class Dummylist extends Component{
    constructor(props){
        super(props)
    }
    handleClick=()=>{
        let text = document.getElementById('textfield')
        this.props.function(text.value);
        this.props.function3();
        text.value = ""
    }
    handleClick2=()=>{
        this.props.function2();
        this.props.function3();
    }
    UNSAFE_componentWillMount=()=>{
        this.props.function3();
    }

    render(){
        return(
            <div>
                Hello World!<br />
                <div id="chucknorrisjoke">{this.props.joke}</div>

                <p></p>
                <input type="text" id="textfield"></input><br />
                <button className="btn btn-primary" onClick={this.handleClick}>Click to add your message!</button><br></br>
                <button className="btn btn-danger" onClick={this.handleClick2}>Click me to clear all messages!</button>
                <br></br>
                {this.props.text != null && <div>
                    <strong>Messages:</strong>
                    <ul>
                        {this.props.text.map((text,index)=><li key={index}>{text}</li>)}
                    </ul>
                </div>
                }
            </div>
        )
    }
}

import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
    return{
        text:state.changeMe, //all states are controlled in the main index.jsx page!
        joke:state.changeMe2
    }
}
// export default connect(mapStateToProps, null)(Dummylist)


import {bindActionCreators} from 'redux'
import {textClear, textYo, chucknorrisjoke} from './textYo'
const mapDispatchToProps =(dispatch)=>{
    return{
        function: bindActionCreators(textYo, dispatch),
        function2: bindActionCreators(textClear, dispatch),
        function3:bindActionCreators(chucknorrisjoke,dispatch)
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Dummylist)