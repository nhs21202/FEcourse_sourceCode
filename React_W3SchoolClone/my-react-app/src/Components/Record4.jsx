import React from 'react';
import '../App.css'
class Record4 extends React.Component{
  render(){
   return <div className ='record1-4' >
    <a href ={this.props.url}>
        <button className = 'rec4-btn'style ={{background:this.props.background}}>
            <h2>
            {this.props.title}
            </h2>
        </button>
    </a>
   </div>
  }
}
export default Record4;