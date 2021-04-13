import React from 'react'
import './TodoItem.css'

function Todo(props) {
	const { id, content, complete, removeTodo, toggleComplete } = props

	return (
		<div className='todoItem'>
			<div
				className={complete === true ? 'content complete' : 'content'}
				onClick={() => toggleComplete(id)}
			>
				{content}
			</div>
			<button onClick={() => removeTodo(id)}>Sil</button>
		</div>
	)
}

export default Todo
