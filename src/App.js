import React, { useState, useeffect, useEffect } from 'react'
import axios from 'axios'
import  TodoHeader  from './components/TodoHeader'
import SearchBar from './components/SearchBar';
import AddTodoForm from './components/AddTodoForm'
import TaskList from './components/TaskList';

// GET THE TASKS
import { Tasks } from './Tasks';

// CSS
import './App.css'


function App() {

  // let [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [tasksLength, setTasksLength] = useState(0)

  //RUN THIS WHEN TASKS IS UPDATED

  useEffect(() => {

      axios.get('http://localhost:4000/tasks')
      .then(res => {
          setTasks(res.data)
          setTasksLength(res.data.length)
      })
      .catch(error => {
        console.log(error)
      })

  }, [])
  

  function addTask(task){
    console.log('The Task is:', task)
    setTasksLength(tasks.length)

    axios.post('http://localhost:4000/tasks', {
        id: tasksLength + 1,
        ...task
    })
    .then(res => {
        setTasks(res.data)
        setTasksLength(tasks.length)
    })
    .catch(error => console.log(error))
    
  }


  return (
    <div className="App shadow-lg">
        <TodoHeader />
        <SearchBar />
        <TaskList tasks={tasks}/>
        <AddTodoForm addTask={addTask} />  

    </div>
  );
}

export default App;
