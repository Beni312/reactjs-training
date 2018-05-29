import { types } from '../actions/actionTypes';

const initialState = {
	profiles: [],
	loaded: false
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_PROFILES: return {
			...state,
			profiles: action.payLoad.profiles,
			loaded: true
		};
		default: {
			return state;
		}
	}
}

