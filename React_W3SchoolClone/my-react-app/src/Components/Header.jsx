import React from 'react';
import '../App.css'
class Header extends React.Component{
  render(){
   // console.log(this.props);
    return<div className='header'>Header,{this.props.name}
    </div>
  }
}
export default Header;