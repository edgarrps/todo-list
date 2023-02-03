import { useState } from 'react'
import { SubmitTask } from './SubmitTask'
import './List.css'
export const List = () => {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
if(!task.text) {
    return

}
const newTasks = [task, ...tasks]

setTasks(newTasks)
    }
    
    return (
        <div className='card'>
            <h1>TO DO LIST</h1>
            <div className='comment'><h2>Quais as suas tarefas para hoje?</h2></div>
            <br></br>
            <SubmitTask onSubmit={addTask} />
        </div>
    )
}
