import { useState } from 'react'
import SubmitTask from './SubmitTask'

function Task() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}></div>
            {task.text}

            <div className='icons'>
            
            </div>
        </div>

    ))
}

export default Task