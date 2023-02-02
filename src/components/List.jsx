import { useState } from 'react'
import { Title } from './Title'
export const List = () => {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
if(!task.text) {
    return

}
const newTasks = [task, ...tasks]

setTasks(newTasks)
console.log(...tasks)
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <br></br>
            <h2>Quais Suas tarefas para hoje?</h2>
            <br></br>
            <Title onSubmit={addTask} />
        </div>
    )
}
