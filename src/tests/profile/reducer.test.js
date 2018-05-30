import { types } from '../../store/actions/actionTypes';
import { reducer } from '../../store/reducers/profileReducer';

describe('Get profiles', () => {
	describe('Get profiles request start', () => {
		it('Should start get profiles and set loading: true', () => {
			const result = reducer(undefined, {
				type: types.GET_PROFILES_REQUEST
			});
			expect(result.loading).toEqual(true);
		});
	});

	describe('Get profiles successful', () => {
		it('Should store profiles', () => {
			const mockData = [{
				"firstName": "John",
				"lastName": "Smith",
				"username": "Anonymus",
				"pictureUrl": "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
			}];
			const result = reducer({profiles: []}, {
				type: types.GET_PROFILES_SUCCESS,
				payload: mockData
			});
			expect(result.profiles).toEqual(mockData);
		});

		it('Should set loading: false', () => {
			const result = reducer({loading: true}, {
				type: types.GET_PROFILES_SUCCESS
			});
			expect(result.loading).toEqual(false);
		});
	});

	describe('Get profiles failure', () => {
		it('Should store error', () => {
			const mockError = '404 Not found';
			const result = reducer({error: null}, {
				type: types.GET_PROFILES_FAILURE,
				payload: mockError
			});
			expect(result.error).toEqual(mockError);
		});

		it('Should set loading: false', () => {
			const result = reducer({loading: true}, {
				type: types.GET_PROFILES_FAILURE
			});
			expect(result.loading).toEqual(false);
		})
	})
});