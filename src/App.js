import React, { useState, useeffect, useEffect } from 'react'
import axios from 'axios'
import  TodoHeader  from './components/TodoHeader'
import SearchBar from './components/SearchBar';
import AddTodoForm from './components/AddTodoForm'
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// GET THE TASKS
import { Tasks } from './Tasks';

// CSS
import './App.css'


function App() {

  // let [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [tasksLength, setTasksLength] = useState(0)
  const [modalData, setModalData] = useState({id: '', task: '', date: '', time: ''})
  const [isUpdated, setIsUpdated] = useState(false)

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

  }, [tasksLength])

  
  // ADD TASK FUNCTION
  function addTask(task){
    console.log('The Task is:', task)
    setTasksLength(tasks.length)

    axios.post('http://localhost:4000/tasks', {
        id: tasksLength + 1,
        ...task
    })
    .then(res => {
      console.log('Data returned from Post request', res.data)
      setTasksLength(tasksLength + 1)
      return setTasks(tasks)
    })
    .catch(error => console.log(error))

  }

  // DELETE A TASK FUNCTION
  function deleteTask(id){
      axios.delete(`http://localhost:4000/tasks/${id}`)
      .then(res => {
          setTasksLength(tasksLength -1)
      })
      .catch(error => console.log(error))
  }

  // VALUES FOR THE CURRENT MODAL
  function ModalDataSetter(x, y, z, a){
      setModalData({id: x, task: y, date: z, time: a})
  }


  return (
    <div className="App shadow-lg">
      <Modal modalData={modalData}  />
        <TodoHeader />
        <SearchBar />
        <TaskList tasks={tasks} ModalDataSetter={ModalDataSetter} deleteTask={deleteTask} />
        <AddTodoForm addTask={addTask} />  

    </div>
  );
}

export default App;
