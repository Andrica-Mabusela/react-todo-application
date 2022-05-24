import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonComponent = styled.button`
    color: #333;
    background-color: rgb(250, 238, 133);
    padding: 10px;
    margin-right: 10px;
    font-weight: bold;
    border: none;
`

// ButtonComponent.

function Button({text}) {
  return (
    <React.Fragment>
      <ButtonComponent>
        {text}
        </ButtonComponent>
    </React.Fragment>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired
  // Types: string, bool, number, object, symbol, func, bigint, array
  
  
  // Renderable Type:  PropTypes.node
  // React element: PropTypes.element
  // React element type: PropTypes.elementType
  // declare that a prop is an instance of a class by using the instanceOf operator: Proptypes.instanceOf(something)
   // You can ensure that your prop is limited to specific values by treating
  // it as an enum: optionalEnum: PropTypes.oneOf(['News', 'Photos'])


  // An array of a certain type
  //optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  // optionalObjectOf: PropTypes.objectOf(PropTypes.number),
}

export default Button