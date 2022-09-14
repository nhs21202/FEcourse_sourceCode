import './App.css';
import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isEdit:false,
      indexEdit:0,
      valueEdited:''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.takeTask = this.takeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.setvalueEdit = this.setvalueEdit.bind(this);

  }

  handleAddTask = (text) => {
    console.log(text);
    let copy = [...this.state.tasks, { name: text }];
    console.log(copy);
    this.setState({ tasks: copy });
  };

  handleDelete(index) {
    const newTasksList = [...this.state.tasks];
    newTasksList.splice(index, 1);
    this.setState({
      tasks: [...newTasksList]
    })
  }

  takeTask = (value, index) => {
    this.setState({ isEdit: true });
    this.setState({ valueEdited: value });
    this.setState({ indexEdit: index });
  };

  editTask = (value) => {
    this.setState({ isEdit: false });
    let copy = [...this.state.tasks];
    copy[this.state.indexEdit].name = value;
    this.setState({tasks: copy });
  };

  setvalueEdit = (value) => {
    this.setState({ valueEdited: value });
  };

  render()  {
    return (
      <div className="App">
        <h1 className='heading'>My To-do List</h1>
        <TaskInput
          handleAddTask={this.handleAddTask}
          isEdit={this.state.isEdit}
          editTask={this.editTask}
          valueEdited={this.state.valueEdited}
          setValueEdit={this.setvalueEdit}
        />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          takeTask={this.takeTask}
        />
      </div>
    );
  }
}

export default App;
 