import React from 'react'
import Task from './Task'

function TaskList({tasks, ModalDataSetter, deleteTask}) {
    console.log(tasks)
  return (
    <section style={{marginTop: '20px'}}>
        {
            tasks.map((task, index) => {
                return <Task key={index} {...task} ModalDataSetter={ModalDataSetter} deleteTask={deleteTask} />
            })
        }
        
    </section>
  )
}

export default TaskList