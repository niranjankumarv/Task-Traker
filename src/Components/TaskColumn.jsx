import React from 'react'
import Todo from "../Assets/direct-hit.png";
import './TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({title,icon}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_headng'><img className='task_column_icon' src={icon} alt="" />{title}</h2>
        <TaskCard/>
    </section>
  )
}

export default TaskColumn