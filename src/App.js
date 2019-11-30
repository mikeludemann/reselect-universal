import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css';

function App() {
	return (
		<div>
			<AddTodo />
			<VisibleTodoList listId="1" />
			<VisibleTodoList listId="2" />
			<VisibleTodoList listId="3" />
			<Footer />
		</div>
	);
}

export default App;
