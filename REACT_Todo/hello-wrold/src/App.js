import './App.css';
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      task: [{
        name:'Minions'
      },

      ],
    }
  }


  render(){
    return <>
    <TaskInput/>;
    <TaskList tasks = {this.state.tasks}/>
    </>
  }
}

export default App;
