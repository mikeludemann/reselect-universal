import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { makeGetVisibleTodos } from '../selectors';

const makeMapStateToProps = () => {
	const getVisibleTodos = makeGetVisibleTodos()
	const mapStateToProps = (state, props) => {
		return {
			todos: getVisibleTodos(state, props)
		}
	}
	return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	makeMapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
