import React from 'react';
import '../App.css'
class CodeEditor extends React.Component{
  render(){
   return <div className='code-editor'>
<h1 className='ce-title'>Code Editor</h1>
<h3 className='ce-subtitle'>With our online code editor, you can edit code and view the result in your browser</h3>
<img className='code-gif' src ="https://www.w3schools.com/codeeditor.gif" alt ='gif'></img>
<div className='btn-container'>
    <a href = 'https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_hello'><button className='front-btn'>Try Frontend Editor (HTML/CSS/JS)</button>
    </a>
    <br></br>
    <a href = 'https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_python'>
    <button className='back-btn'>Try Backend Editor (Python/PHP/Java...)</button>
    </a>
    </div>
   </div>
  }
}
export default CodeEditor;