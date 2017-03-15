import React from 'react';
import '../App.css';
import ClearComplete from './clearcomplete';
import DropdownFilter from './dropdown';
import ListItem from './listitem';
import NewItem from './newitem';
import axios from 'axios';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: [],
			value: '',
			selectOption: 'all',
			// numTimes: 0
		};
		this.isChecked = this.isChecked.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.clearComplete = this.clearComplete.bind(this);
	}

	// NEW ITEM 
	isChecked(event, index) {
		const todosCopy = this.state.todos;
		todosCopy[index].done = !todosCopy[index].done
		this.setState ({
			todos: todosCopy
		})
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.state.todos.push({text: this.state.value, done: false, id: (this.state.todos.length + 1 )})
		this.setState({
			todos: this.state.todos,
			value: ''
		})
	}
	// END NEW ITEM 

	// DROPDOWN LIST 
	selectOption (event) {
		this.setState({
			selectOption: event.target.value
		})
	}
	// END DROPDOWN LIST 

	clearComplete () {
		event.preventDefault();
		const todo = this.state.todos;
		
		let clearCompleteArray = todo.filter((todo) => {

			return todo.done === false;
		})
		this.setState({
			todos: clearCompleteArray
		})
	}

	componentDidUpdate() {

		axios.post('http://localhost:8080/', this.state.todos) // change to localhost:8002 for diving deeper
			.then(res => {
			})
			.catch(err => {
				console.log(err)
			})
	}

	componentDidMount() { 
		axios.get('http://localhost:8080/') // change to localhost:8002 for diving deeper
			.then(res => {
				this.setState({
					todos: res.data
				})
			})

		// axios.get('http://localhost:8080/counter')
		// 	.then(res => {
		// 		this.setState({
		// 			numTimes: res.data
		// 		})
		// 	})
		// axios.post('http://localhost:8080/counter', this.state.numTime) 
		// 	.then(res => {
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})
	}

	render(){
		const todo = this.state.todos;
		let listItemsJSX = 
		todo.filter((todo, i)=>{ // in place of onSubmit so we don't alter this.state 
			if (this.state.selectOption === 'all' ) { // for dropdown list 
				return todo
			}
			else if (this.state.selectOption === 'active') {
				return todo.done === false
			}
			else if (this.state.selectOption === 'complete') {
				return todo.done === true
			}
		}).map((todo, i) => { // for rendering list
			return <ListItem index={i} text={todo.text} done={todo.done} id={todo.id} isChecked={this.isChecked}/>
		})

		return( // key won't work unless you put value of listItemsJSX into return func directly (not use variable)
			
			<div className="container">
				<ul className="list-group">
                    <h1>Todo list</h1>
					<NewItem onSubmit={(e)=>{this.handleSubmit(e)}} onChange={this.handleChange} value={this.state.value} />
					{listItemsJSX} <br/>
				</ul>
				<DropdownFilter onChange={this.selectOption} value={this.state.selectOption}/>
				<ClearComplete clearComplete={this.clearComplete} /><br/><br/>
				<span>Times visited: {this.state.numTimes} </span>
			</div>
		)
	}
}

export default App
