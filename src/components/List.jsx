import { useState } from 'react'
import { SubmitTask } from './SubmitTask'
import  Task  from './Task'

export const List = () => {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return

        }
        const newTasks = [task, ...tasks]

        setTasks(newTasks)
    }

    const updateTask = (taskId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTasks(previous => previous.map(item => (item.id === taskId ? newValue : item)))
    }


    const removeTask = id => {
        const removeArray = [...tasks].filter(task => task.id !== id)

        setTasks(removeArray)
    }

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className='card'>
            <h1>TO DO LIST</h1>
            <div className='comment'><h2>Quais as suas tarefas para hoje?</h2></div>
            <br></br>
            <SubmitTask onSubmit={addTask} />
            <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    )
}
