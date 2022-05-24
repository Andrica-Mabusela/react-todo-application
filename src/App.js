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

  useEffect(() => {
      // axios('http://localhost:4000/tasks')
      // .then(response => response.json())
      // .then(jsonEncodedData => setTasks(jsonEncodedData))
      // .catch(error => console.log(error))

      axios.get('http://localhost:4000/tasks')
      .then(res => {
          return setTasks(res.data)
      })
      .catch(error => {
        console.log(error)
      })
      
  }, [])
  

  function addTask(task){
    console.log('The Task is:', task)
    setTasks([...tasks, task])
    alert('Task Added Successfully')
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
