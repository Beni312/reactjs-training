import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { actions } from '../../store/reducers/profileReducer';
import { types } from '../../store/actions/actionTypes';

describe('getProfiles()', () => {
	it('Should dispatch the GET_PROFILES_REQUEST action, when this function called', () => {
		const spy = jest.fn();
		const thunk = actions.getProfiles();
		thunk(spy);

		expect(spy.mock.calls[0][0]).toEqual({
			type: types.GET_PROFILES_REQUEST,
		});
	});

	it('Should dispatch the GET_PROFILES_SUCCESS action when the data got successfully', () => {
		const mockData = [{
			"firstName": "John",
			"lastName": "Smith",
			"username": "Anonymus",
			"pictureUrl": "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
		}];
		const mockAxios = new MockAdapter(axios);
		mockAxios.onGet('/profiles.json').reply(200, mockData);

		const spy = jest.fn();
		const thunk = actions.getProfiles();
		thunk(spy).then(function () {
			expect(spy.mock.calls[1][0]).toEqual({
				type: types.GET_PROFILES_SUCCESS,
				payload: mockData,
			});
		});
	});

	it('Should dispatch the GET_PROFILES_FAILURE action when the data is not available', () => {
		const mockAxios = new MockAdapter(axios);
		mockAxios.onGet('/profiles.json').reply(404);

		const spy = jest.fn();
		const thunk = actions.getProfiles();
		thunk(spy).then(function () {
			expect(spy.mock.calls[1][0]).toEqual({
				type: types.GET_PROFILES_FAILURE,
				payload: 'Request failed with status code 404',
			});
		});
	});
});
