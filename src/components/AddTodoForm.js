import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Button from './Button'

const FormInputElement = styled.input`
    padding: 10px;
    margin: 15px 0;
`

const LabelComponent = styled.label`
    font-size: 20px;
    font-weight: 600;
`

function FormGroup({ type, name, placeholderText, labelText, inputValue }) {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskTime, setTaskTime] = useState('')


    function handleOnChange(event){

        console.log(taskTitle)
        if(event.target.name == 'task'){
            setTaskTitle(event.target.value)
            console.log(taskTitle)
            
        } else if( event.target.name == 'date' ){
            setTaskDate(event.target.value)
            console.log(taskDate)
        }else if( event.target.name == 'time' ) {
            setTaskTime(event.target.value)
            console.log(taskTime)
        } 

    }


    return (
        <div className='form-group'>
            <LabelComponent>{labelText}</LabelComponent>
            <FormInputElement 
                className='form-control'
                type={type}
                name={name}
                placeholder={placeholderText}
                onChange={handleOnChange}
                value={ name == 'task' ? taskTitle : name == 'date' ? taskDate : name == 'time' ? taskTime : '' }
                >
            </FormInputElement>
        </div>
    )
}

const AddTodoForm = React.forwardRef(() => {

    function setInputValue(inputValue) {
        
    }

    return (
        <section className="Add-todo-wrapper">
            <form>
                <FormGroup type="text" name="task" placeholderText="Enter A Task" labelText="Task"></FormGroup>
                <FormGroup type="date" name="date" labelText="Choose Date"></FormGroup>
                <FormGroup type="time" name="time" placeholderText="Time" labelText="Choose Time"></FormGroup>
                <Button text="Add Task" />
            </form>
        </section>
    )

})

export default AddTodoForm