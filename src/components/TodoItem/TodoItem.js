import React from 'react'
import './TodoItem.css'

function Todo(props) {
	const { id, content, removeTodo } = props

	const toggleComplete = (e) => {
		e.target.firstElementChild.classList.toggle('complete')
	}
	return (
		<div className='todoItem' onClick={toggleComplete}>
			<div>{content}</div>
			<button onClick={() => removeTodo(id)}>Sil</button>
		</div>
	)
}

export default Todo
