import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

class TaskItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleDelete(index){
    this.props.handleDelete(index)
  }
  handleAddTask(index){
    this.props.handleAddTask(index)
  }
  handleEdit(event){
    this.props.takeTask(this.props.todo.name,this.props.index)
  }
  render(){
    return (
      <div className="task">
        <span className='item-name'>{this.props.todo.name}</span>
        <div className='functional-btn'>
        <button className='edit-btn' onClick={this.handleEdit}><FontAwesomeIcon icon={faPenToSquare}/></button>
        <button className='delete-btn' onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashCan}/></button>
        </div>
      </div>
    );
  }
}


export default TaskItem;
 