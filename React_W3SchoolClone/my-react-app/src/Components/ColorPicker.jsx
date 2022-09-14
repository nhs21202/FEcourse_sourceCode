import React from 'react';
import '../App.css'
class ColorPicker extends React.Component{
  render(){
    return <div className = 'ColorPicker'>
        <h1 className='CP-title'>Color Picker</h1>
        <h4 className='CP-subtitle'>W3Schools' famous color picker</h4>
        <a href='https://www.w3schools.com/colors/colors_picker.asp'>
            <img  className='CP-btn' src ='https://www.w3schools.com/images/colorpicker.png'></img>
        </a>
    </div>
  }
}
export default ColorPicker;