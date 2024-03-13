import React from 'react';
import "./App.css"
import TaskForm from './Components/TaskForm';
import TaskColumn from './Components/TaskColumn';
import todoIcon from './Assets/direct-hit.png';
import doingIcon from './Assets/glowing-star.png';
import doneIcon from './Assets/check-mark-button.png';

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title= "Todo" icon= {todoIcon}/>
        <TaskColumn title= "Doing" icon= {doingIcon}/>
        <TaskColumn title = "Done" icon= {doneIcon}/>
      </main>
    </div>
  )
}

export default App