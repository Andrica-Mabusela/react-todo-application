import styled from 'styled-components'

import React from 'react'
import Button from './Button'

const FormComponent = styled.form`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`

const InputElement = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid lightgrey;
    margin: 10px 0;
`

function SearchBar() {
  return (
    <React.Fragment>
            <FormComponent>
                <InputElement type="text" placeholder="Search A Task"></InputElement>
                <Button text="search"></Button>
            </FormComponent>
    </React.Fragment>
  )
}

export default SearchBar