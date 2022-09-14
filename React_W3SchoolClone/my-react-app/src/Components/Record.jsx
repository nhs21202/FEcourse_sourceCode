import React from 'react';
import '../App.css'
class Record extends React.Component{
  render(){
    return<div className='record1-1' style={{background:this.props.background}}>
        <h2 className='title'>{this.props.title}</h2>
        <h5 className ='sub-title'>{this.props.subTitle}</h5>

       <a href = {this.props.url}>
        <button className ='btn'>Learn {this.props.title}</button>
       </a>
    </div>
  }
}
export default Record;