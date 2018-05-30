import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Nav, NavItem, Navbar, NavLink } from 'reactstrap';
import React, { Component } from 'react';
import ProfileComponent from './components/profile/profile-component';
import TodoComponent from './components/todo/todo-component';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar color="dark" light expand="md">
						<Nav>
							<NavItem>
								<NavLink href="/todo">Todo component</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/profiles">Profiles component</NavLink>
							</NavItem>
						</Nav>
					</Navbar>
					<div className="container-fluid">
						<Switch>
							<Route path="/" exact render={() => (<Redirect to="/todo" />)}/>
							<Route path="/todo" exact component={TodoComponent}/>
							<Route path="/profiles" component={ProfileComponent}/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
