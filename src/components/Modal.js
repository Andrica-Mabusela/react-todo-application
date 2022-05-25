import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Modal({ modalData, isTaskUpdated }) { 

    const [isUpdated, setIsUpdated] = useState(false)

    const [id, setId] = useState('') 
    const [task, setTask] = useState('') 
    const [date, setDate] = useState('') 
    const [time, setTime] = useState('')


    function handleSubmit(event) {
        event.preventDefault()

        axios.put(`http://localhost:4000/tasks/${modalData.id}`, {
            task: task ? task : modalData.task,
            date: date ? date : modalData.date,
            time: time ? time : modalData.time
        })
        .then(res => {
            console.log('Task is updated')
        })
        .catch(error => { 
            console.log(error.message)    
        })

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
                                <input type="text" placeholder='Add Task' value={task ? task : modalData.task} onChange={(event) => setTask(event.target.value)} className='form-control' />
                            </div>

                            <div className='form-group'>
                                <input type="date" placeholder='Add Date' value={date ? date : modalData.date} onChange={ (event) => setDate(event.target.value) } className='form-control' />
                            </div>

                            <div className='form-group'>
                                <input type="time" placeholder='Add Time' value={time ? time : modalData.time} onChange={(event) => setTime(event.target.value)} className='form-control' />
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer" style={{ backgroundColor: 'lemonchiffon' }}>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn" style={{backgroundColor: 'rgb(250, 238, 133)'}} onClick={handleSubmit}>Update Task</button>
                    </div>
                    </div>
                </div>
                </div>
    </section>
  )
}

export default Modal