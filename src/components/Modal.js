import React, { useState } from 'react'
import axios from 'axios'


function Modal({ modalId, modalTask, modalDate, modalTime }) {

    console.log('values received:', modalId, modalTask, modalDate, modalTime)

    const [id, setId] = useState(modalId) 
    const [task, setTask] = useState(modalTask) 
    const [date, setDate] = useState(modalDate) 
    const [time, setTime] = useState(modalTime) 


    function handleSubmit(event) {
            event.preventDefault()

    }


  return (
    <section>

                {/* Modal  */}

            <div  className="modal fade"  id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div  className="modal-dialog" role="document" style={{ backgroundColor: 'lemonchiffon', borderRadius: '10px' }}>
                    <div className="modal-content" style={{ backgroundColor: 'lemonchiffon', borderRadius: '10px' }}>
                    <div className="modal-header" style={{ backgroundColor: 'lemonchiffon' }}>
                        <h5 className="modal-title" id="exampleModalLongTitle">Update The Task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>


                    <div className="modal-body" style={{ backgroundColor: 'lemonchiffon' }}>
                        <form>
                            <div className='form-group'>
                                <input type="text" placeholder='Add Task' value={modalTask} onChange={(event) => setTask(event.target.value)} className='form-control' />
                            </div>

                            <div className='form-group'>
                                <input type="date" placeholder='Add Date' value={modalDate} onChange={ (event) => setDate(event.target.value) } className='form-control' />
                            </div>

                            <div className='form-group'>
                                <input type="time" placeholder='Add Time' value={modalTime} onChange={(event) => setTime(event.target.value)} className='form-control' />
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer" style={{ backgroundColor: 'lemonchiffon' }}>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn" style={{backgroundColor: 'rgb(250, 238, 133)'}}>Update Task</button>
                    </div>
                    </div>
                </div>
                </div>
    </section>
  )
}

export default Modal