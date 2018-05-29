import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todo } from './store/reducers/todoReducer';
import { reducer as profile } from './store/reducers/profileReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	todo,
	profile
});

export default createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
));
