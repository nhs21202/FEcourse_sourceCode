import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tasklist">
        {" "}
        {this.props.tasks.map((todo, index) => {
          return (
            <TaskItem
              takeTask={this.props.takeTask}
              handleDelete={this.props.handleDelete}
             // key={index}
              index={index}
              todo={todo}
            />
          );
        })}
      </div>
    );
  }
}


export default TaskList;
