import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Modal from './Modal'

const TaskItem = styled.section`
    background-color: lemonchiffon;
    padding: 10px;
    margin: 10px 5px;
    display: flex;
    justify-content: space-between;
`

const actionButtonStyles = {
    backgroundColor: 'rgb(250, 238, 133)',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    margin: '0 6px',
    color: '#333'
}


function Task({ id, task, date, time, deleteTask }) {

    const [modalId, setModalId] = useState(id)
    const [modalTask, setModalTask] = useState(task)
    const [modalDate, setModalDate] = useState(date)
    const [modalTime, setModalTime] = useState(time)

    useEffect(() => {
        console.log('sdcjh')
    })

    function modalValues(myId, myTask, myDate, myTime){
            console.log('FROM TASK', myId, myTask, myDate, myTime )
            setModalId(myId)
            setModalTask(myTask)
            setModalDate(myDate)
            setModalTime(myTime)

            console.log(modalId, modalTask, modalDate, modalTime)
    }

    

  return (
      <>
        <Modal modalId={modalId} modalTask={modalTask} modalDate={modalDate} modalTime={modalTime} />
        <TaskItem className='shadow'>
            <div>{task}</div>
            <article style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{ margin: '0 5px' }}>{date}</div>
                    <div style={{ margin: '0 5px' }}>{time}</div>
            </article>

            <div>
               <button type="button" onClick={() => { modalValues(id, task, date, time) }} className='fas fa-edit' style={actionButtonStyles} data-toggle="modal" data-target="#exampleModalLong"></button>
               <button type="button" className='fas fa-trash' style={actionButtonStyles} onClick={() => { deleteTask(id)} }></button>
            </div>

        </TaskItem>
        </>
  )
}

export default Task