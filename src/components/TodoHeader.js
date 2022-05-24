import React from 'react'


const headerStyles = {
    color: '#333',
    padding: '10px',
    margin: '20px 0',
    fontFamily: 'sans-serif',
    textAlign: 'center'   
}

function TodoHeader() {
  return (
    <div style={headerStyles}>
        <h2>React Todo Application</h2>
    </div>
  )
}

export default TodoHeader