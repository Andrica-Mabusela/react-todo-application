import React, { useState, useRef } from 'react'
import axios from 'axios'
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

function FormGroup({ type, name, placeholderText, labelText }) {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskTime, setTaskTime] = useState('')

   
    function handleOnChange(event){
        console.log(taskTitle)
        console.log(taskDate)
        console.log(taskTime)
    }



    return (
        <div className='form-group'>
            <LabelComponent>{labelText}</LabelComponent>
            <FormInputElement 
                className='form-control'
                type={type}
                name={name}
                placeholder={placeholderText}
                onChange={name === 'task' ? (event) => setTaskTitle(event.target.value) : name === 'date' ? (event) => setTaskDate(event.target.value) : (event) => setTaskTime(event.target.value) }
                value={ name === 'task' ? taskTitle : name === 'date' ? taskDate : name === 'time' ? taskTime : '' }
                >
            </FormInputElement>
        </div>
    )
}



function AddTodoForm({addTask}){

    const formRef = useRef()
    const [tasksLength, setTasksLength] = useState(0)

    // useEffect(() => {
    //     axios.get('http://localhost:4000/tasks')
    //     .then((res) => {
    //         console.log('setting length of tasks')
    //         setTasksLength(res.data.length)
    //     })
    //     .catch(error => console.log(error))
    // }, [tasksLength])

    function handleSubmit(event){
        event.preventDefault()

        console.log(formRef.current.task)
        console.log(formRef.current.date)
        console.log(formRef.current.time)

       if( !formRef.current.task.value || !formRef.current.date.value || !formRef.current.time.value  ){
            alert("All The fields are required")
       } else {


            //ADD A TASK
            addTask({task: formRef.current.task.value, date: formRef.current.date.value, time: formRef.current.time.value})
            formRef.current.task.value = ''
            formRef.current.date.value = ''
            formRef.current.time.value = ''
       }
    }


    return (
        <section className="Add-todo-wrapper">
            <form ref={formRef} onSubmit={handleSubmit} >
                <FormGroup type="text" name="task" placeholderText="Enter A Task" labelText="Task"></FormGroup>
                <FormGroup type="date" name="date" labelText="Choose Date"></FormGroup>
                <FormGroup type="time" name="time" placeholderText="Time" labelText="Choose Time"></FormGroup>
                <Button type="submit" text="Add Task" />
            </form>
        </section>
    )

}

export default AddTodoForm