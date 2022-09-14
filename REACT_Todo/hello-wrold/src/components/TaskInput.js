import React from 'react';

class TaskInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'asdad'
        }
    }
    handleSubmit(this){
        console.log('submit',this.state.text)
    }
    handleChange(event){
        this.setState({
            text: event.target.value
        })
    }
    render(){
        return <>
            <input type="text" value ={this.state.text}></input>
            <button onClick={this.handleSubmit}>Submit</button>
        </>
    }
}

export default TaskInput;