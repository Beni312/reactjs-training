import { types } from '../actions/actionTypes';

const initialState = {
	items: [],
	counter: 0
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TODO_ITEM:
			return {
				...state,
				items: state.items.concat({id: state.counter, name: action.payload}),
				counter: state.counter + 1
			};
		case types.REMOVE_TODO_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload.id)
			};
		default: {
			return state;
		}
	}
};