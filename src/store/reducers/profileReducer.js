import axios from 'axios/index';
import { types } from '../actions/actionTypes';

const initialState = {
	profiles: [],
	loading: null,
	error: null
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case types.GET_PROFILES_REQUEST: return {
			...state,
			loading: true
		};
		case types.GET_PROFILES_SUCCESS: return {
			...state,
			profiles: action.payload,
			loading: false
		};
		case types.GET_PROFILES_FAILURE: return {
			...state,
			loading: false,
			error: action.payload
		};
		default: {
			return state;
		}
	}
}

export const actions = {
	getProfiles() {
		return function (dispatch, getState) {
			dispatch({
				type: types.GET_PROFILES_REQUEST,
			});

			return axios.get('/profiles.json')
				.then(function (response) {
					dispatch({
						type: types.GET_PROFILES_SUCCESS,
						payload: response.data,
					});
				})
				.catch(err => {
					dispatch({
						type: types.GET_PROFILES_FAILURE,
						payload: err.message,
					});
				});
		};
	},
};
