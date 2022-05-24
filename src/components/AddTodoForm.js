import React from 'react'
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
    return (
        <div className='form-group'>
            <LabelComponent>{labelText}</LabelComponent>
            <FormInputElement className='form-control' type={type} name={name} placeholder={placeholderText}></FormInputElement>
        </div>
    )
}

function AddTodoForm() {

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

}

export default AddTodoForm