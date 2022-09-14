import React from 'react';
import '../App.css'
class Record3 extends React.Component{
  render(){
   return <div className ='record1-3' >
    <a href ={this.props.url}>
        <button className = 'rec3-btn'style ={{background:this.props.background}}>
            <h2>
            {this.props.title}
            </h2>
        </button>
    </a>
   </div>
  }
}
export default Record3;