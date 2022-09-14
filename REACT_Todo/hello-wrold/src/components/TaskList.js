import React from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

class TaskList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
     return <>
     {this.props.tasks.map((task,index)=>{
        return <TaskItem />
     }
     )}
     </>
    }
}

export default TaskList;