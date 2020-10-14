import React, {Component} from 'react'

class Dummylist extends Component{
    constructor(props){
        super(props)
    }
    handleClick=()=>{
        let text = document.getElementById('textfield')
        this.props.function(text.value);
        text.value = ""
    }
    handleClick2=()=>{
        this.props.function2();
    }
    render(){
        fetch('http://api.icndb.com/jokes/random')
        .then(response =>response.json())
        .then((data)=>{
            // console.log(data.value.joke)
            document.getElementById('chucknorrisjoke').innerText = `${data.value.joke}`
        })
        return(
            <div>
                Hello World!<br />
                <div id="chucknorrisjoke"></div>

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
        text:state.changeMe //all states are controlled in the main index.jsx page!
    }
}
// export default connect(mapStateToProps, null)(Dummylist)


import {bindActionCreators} from 'redux'
import {textClear, textYo} from './textYo'
const mapDispatchToProps =(dispatch)=>{
    return{
        function: bindActionCreators(textYo, dispatch),
        function2: bindActionCreators(textClear, dispatch)
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Dummylist)