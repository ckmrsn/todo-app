import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'
import Form from './components/Form/Form'
import TodoHeader from './components/TodoHeader'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
			todos: [],
		}
	}

	// Eğer input alanı boş değilse todos'a ekleye
	addItem = () => {
		// input'ta yazılı olan string değer
		const currentValue = this.state.userInput

		if (this.state.userInput !== '') {
			const userInput = {
				// Delete yaparken kullanılabilmesi için bir her item için random bir id
				id: Math.random(),
				content: currentValue,
				complete: false,
			}

			this.setState(
				{
					// Var olan array'i korumak için spread operatör kullanılıyor
					// spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
					todos: [...this.state.todos, userInput],
				},
				() => {
					// Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
					this.setState({
						userInput: '',
					})
				}
			)
		}
	}

	onInputChange = (e) => {
		const newVal = e.target.value
		this.setState({
			userInput: newVal,
		})
	}

	removeTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((item) => item.id !== id),
		})
	}
	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((item) =>
				item.id === id ? { ...item, complete: !item.complete } : { ...item }
			),
		})
	}

	render() {
		return (
			<div className='App'>
				<TodoHeader />
				<Form
					userInput={this.state.userInput}
					onInputChange={this.onInputChange}
					addItem={this.addItem}
				/>
				{this.state.todos.length > 0 && (
					<div className='list'>
						<TodoList
							todos={this.state.todos}
							removeTodo={this.removeTodo}
							toggleComplete={this.toggleComplete}
						/>
					</div>
				)}
			</div>
		)
	}
}

export default App
