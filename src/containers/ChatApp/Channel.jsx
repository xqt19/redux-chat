import React, {Component} from 'react'

class Channel extends Component{
    constructor(props){
        super(props)
        this.state ={
            submitClicked: false
        }
    }
    componentDidMount = ()=>{
            setInterval(this.myFunction, 4000);
    }
    myFunction = () => {
        this.props.getMessages(this.props.active)
        this.setState({
            submitClicked: false
        })
    }
    handleSubmit = () =>{
        const url = `https://wagon-chat.herokuapp.com/${this.props.active}/messages`
        const body = {
            "author": `${this.props.name}`,
            "content": `${this.props.input}`
        }
        const promise = fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }).then(r => r.json());
        this.setState({
            submitClicked: true
        })
        this.props.updateInput("")
    }
    onChange=(e)=>{
        this.props.updateInput(e.target.value)
    }
    nameChange=(e)=>{
        this.props.updateName(e.target.value)
    }

    stringToColour = (str) =>{
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.active != null && <h1> #{this.props.active} </h1>}
                    {this.props.active == null && <h3>Pick a Channel to start chatting!</h3>}
                    {this.props.active != null && (this.props.messages==null || this.props.messages.length <1 ) && <h3>Its lonely here, post the first message!</h3>}
                    <br />
                    <ul style={{listStyle:"none"}}>
                    {this.props.messages != null && this.props.active !=null &&
                        this.props.messages.map((message,index) => 
                    <li key={index}><strong style={{color:`${this.stringToColour(message.author)}`}}>{message.author}</strong>: {message.content}</li>
                        )
                    }                  
                    </ul>                    
                </div>
                <br />
                <hr />
                <br />
                {this.props.active != null && 
                <div className="d-flex text-right" style={{paddingRight: "20%"}}>
                My Name is <input type="text"
                onChange={(e)=>this.nameChange(e)}
                value={this.props.name}
                ></input>
                </div>
                }

                <br />
                {this.props.active != null &&
                <div>
                    <input type="text" 
                    style={{width: "80%", marginRight:"15px"}}
                    onChange={(e)=>this.onChange(e)}
                    value={this.props.input}></input>
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit!</button>
                    {this.state.submitClicked &&
                    <div className="alert alert-success">Post is submitting...</div>
                    }
                </div>
                } 

            </div>
        )
    }
}
import {connect} from'react-redux'
const mapStateToProps = (state)=>{
    return{
        active: state.activechannel,
        messages: state.channelmessages,
        input: state.inputbar,
        name: state.namebar
    }
}
import {loadChannelMessages, updateInput, updateName} from './ChatActions'
import {bindActionCreators} from 'redux'
const mapDispatchToProps =(dispatch)=>{
    return{
        getMessages: bindActionCreators(loadChannelMessages, dispatch),
        updateInput: bindActionCreators(updateInput, dispatch),
        updateName: bindActionCreators(updateName, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Channel)