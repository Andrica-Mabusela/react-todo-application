import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
    color: #333;
    background-color: rgb(250, 238, 133);
    padding: 10px;
    margin-right: 10px;
    font-weight: bold;
    border: none;
`

function Button({text}) {
  return (
    <React.Fragment>
      <ButtonComponent>
        {text}
        </ButtonComponent>
    </React.Fragment>
  )
}

export default Button