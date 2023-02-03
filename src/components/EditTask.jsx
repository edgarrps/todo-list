import { useState } from 'react'

export const EditTask = (props) => {
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
      <form className="todo-form" onSubmit={hdlSubmit}>
        <input className="toDoInput" name="text" type="text" placeholder="Editar tarefa" value={input} onChange={hdlChange} />
        <button className="addToDoBtn"><strong>+</strong></button>
      </form>
    </div>

  )
}
