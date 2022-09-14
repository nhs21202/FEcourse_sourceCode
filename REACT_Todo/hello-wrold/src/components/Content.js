import React from 'react';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('click');
        this.props.handleClick();
    }
    render(){
        return <>
        <h2>{this.props.text}</h2>
        <button onClick = {this.props.handleClick} >Change text</button>
        </>
    }
}
export default Content;