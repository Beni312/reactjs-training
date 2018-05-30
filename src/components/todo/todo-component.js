import React, { Component } from 'react';
import './todo-component.css';
import { connect } from 'react-redux';
import { types } from '../../store/actions/actionTypes';

class ListItems extends Component {

	constructor() {
		super();
		this.state = {
			show: null
		};
	}

	render() {
		return (
			this.props.items.map((item, i) => {
				return (
					<li className="list-group-item" key={i} onMouseEnter={() => this.setState({show: i})}
					    onMouseLeave={() => this.setState({show: null})}>
						{item.name}
						{this.state.show === i ?
							<b id="remove" className="float-right" onClick={() => this.props.removeClick(item)}>X</b> : null}
					</li>
				);
			})
		);
	}
}

class List extends Component {

	constructor() {
		super();
		this.state = {
			opened: null
		};
	}

	render() {
		return (
			<ul className="list-group">
				<ListItems items={this.props.items} removeClick={(item) => this.props.removeItemEvent(item)}/>
			</ul>
		);
	}
}

class TodoInput extends Component {

	constructor() {
		super();
		this.state = {
			value: ''
		};

		this.update = this.update.bind(this);
	}

	update() {
		if (this.state.value === '') {
			return;
		}
		this.props.onEnter(this.state.value);
		this.setState({value: ''});
	}

	render() {
		const addToEnter = e => {
			if (e.keyCode === 13) {
				this.update();
			}
		};
		return (
			<div>
				<input id="todoInput" type="text" className="form-control" placeholder="Type a text then press enter" value={this.state.value} onChange={(input) => this.setState({value: input.target.value})} onKeyDown={addToEnter}/>
			</div>
		);
	}
}

class TodoComponent extends Component {
	render() {
		return (
			<div className="container">
				<TodoInput onEnter={(item) => this.props.onAddTodoItem(item)}/>
				<List items={this.props.items} removeItemEvent={(item) => this.props.onRemoveTodoItem(item)}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.todo.items
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onAddTodoItem: (item) => dispatch({type: types.ADD_TODO_ITEM, payload: item}),
		onRemoveTodoItem: (item) => dispatch({type: types.REMOVE_TODO_ITEM, payload: item})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);