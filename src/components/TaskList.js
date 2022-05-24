import React from 'react'
import Task from './Task'

function TaskList({tasks}) {
    console.log(tasks)
  return (
    <section style={{marginTop: '20px'}}>
        {
            tasks.map((task, index) => {
                return <Task key={task.id} {...task} />
            })
        }
        
    </section>
  )
}

export default TaskList