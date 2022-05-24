import React, { useState } from 'react'
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
  const [tasks, setTasks] = useState(Tasks)


  return (
    <div className="App shadow-lg">
        <TodoHeader />
        <SearchBar />
        <TaskList tasks={tasks}/>
        <AddTodoForm />  

    </div>
  );
}

export default App;
