import { useState } from 'react'

export const SubmitTask = (props) => {
  const [input, setInput] = useState('')

  const hdlSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }
  const hdlChange = e => {
    setInput(e.target.value)
  }


  return (
    <div>
      <form className="taskForm" onSubmit={hdlSubmit}>
        <input className="taskInput" name="text" type="text" placeholder="Nova tarefa" value={input} onChange={hdlChange} />
        <button className="addTaskBtn"><strong>+</strong></button>
      </form>
    </div>

  )
}
