import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
class LearnToCode extends React.Component{
  render(){
   return <div className='ltc-container'>
    <div className='content-container'>
        <h1 className='ltc-title'>Learn to Code</h1>
        <h3 className='ltc-subtitle'>With the world's largest web developer site.
</h3>
        <form className='searching'>
            <input type="text" placeholder='Search our tutorials, e.g. HTML' className='searching-bar'/>
            <button className='searching-btn'>
              <FontAwesomeIcon icon ={faMagnifyingGlass} className='fa-icon'/>
            </button>
        </form>
        <a className='ltc-url' href ='https://www.w3schools.com/where_to_start.asp'>Not Sure Where To Begin?</a>
    </div>
    <img src ='/images/Wave.PNG' className='wave-img'></img>

   </div>
  }
}
export default LearnToCode;