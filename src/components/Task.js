import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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


function Task({ task, date, time }) {

    console.log(task)
  return (
        <TaskItem className='shadow'>
            <div>{task}</div>
            <article style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{ margin: '0 5px' }}>{date}</div>
                    <div style={{ margin: '0 5px' }}>{time}</div>
            </article>

            <div>
               <button className='fas fa-edit' style={actionButtonStyles}></button>
               <button className='fas fa-trash' style={actionButtonStyles}></button>
            </div>

        </TaskItem>
  )
}

export default Task