import React from 'react';
import '../App.css'
class W3SSpace extends React.Component{
  render(){
    return <div className='space'>
        <h1 className='W3S-title'>W3Schools Spaces</h1>
        <h3 className ='W3S-subtitle'>Build your own website with W3Schools Spaces.</h3>
        <a href='https://www.w3schools.com/spaces/index.html'>
            <button className='W3S-btn'>Get Started for Free</button>
        </a>
        <br></br>
        <img src ='https://www.w3schools.com/how-spaces-works3.png'></img>
    </div>
  }
}
export default W3SSpace;