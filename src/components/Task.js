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


function Task({ id, task, date, time, ModalDataSetter, deleteTask }) {

    const [modalId, setModalId] = useState(id)
    const [modalTask, setModalTask] = useState(task)
    const [modalDate, setModalDate] = useState(date)
    const [modalTime, setModalTime] = useState(time)


    function modalValuesSetter(myId, myTask, myDate, myTime){
        setModalId(myId)
        setModalTask(myTask)
        setModalDate(myDate)
        setModalTask(myTime)
    }


    function modalValuesCaller(func, id=modalId, task=modalTask, date=modalDate, time=modalTime, ...params){
        func(id, task, date, time)
    }
   

    

  return (
      <>
        {/* <Modal modalId={modalId} modalTask={modalTask} modalDate={modalDate} modalTime={modalTime} /> */}
        {/* <Modal modalValuesCaller={modalValuesCaller} /> */}
        <TaskItem className='shadow'>
            <div>{task}</div>
            <article style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{ margin: '0 5px' }}>{date}</div>
                    <div style={{ margin: '0 5px' }}>{time}</div>
            </article>

            <div>
               <button type="button" className='fas fa-edit' style={actionButtonStyles} onClick={() => { ModalDataSetter(id, task, date, time) } } data-toggle="modal" data-target="#exampleModalLong"></button>
               <button type="button" className='fas fa-trash' style={actionButtonStyles} onClick={() => { deleteTask(id)} }></button>
            </div>

        </TaskItem>
        </>
  )
}

export default Task