import React from 'react';

class TaskInput extends React.Component {
  constructor(props){
    super(props) ;
    this.state = {
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);


  }
  
  handleSubmit(){
    if (this.state.text !== "") {
      this.props.handleAddTask(this.state.text);
      this.setState({text: "" });
    }
  };
  
  handleChange(event){
    this.setState({
      text: event.target.value 
    })
  }
  
  handleEditChange(event){
    this.props.setValueEdit(event.target.value)
  }
  handleEdit(event){
    this.props.editTask(this.props.valueEdited)
  }

  render() {
    return (
      <>
        {this.props.isEdit ? (
          <div className="submit_input">
            <input className='input-box'
              value={this.props.valueEdited}
              type="text"
              onChange={this.handleEditChange}
            />
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        ) : (
          <div className="submit_input">
            <input className='input-box'
              value={this.state.text}
              type="text"
              onChange={this.handleChange}
              placeholder="Enter task..."
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
         )
         }
      </>
    );
  }
}

export default TaskInput;
 