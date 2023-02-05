import { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { EditTask } from './EditTask'

function Task({tasks, completeTask, removeTask, updateTask}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const taskUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <EditTask edit={edit} onSubmit={taskUpdate} />
    }

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}></div>
            {task.text}

            <div className='icons'>
            <HiOutlinePencilAlt onClick={() => setEdit({id: task.id, value: task.text})} className='edit-icon'/>
            <RiCloseFill onClick={() => removeTask(task.id)} className='delete-icon'/>
            </div>
        </div>

    ))
}

export default Task