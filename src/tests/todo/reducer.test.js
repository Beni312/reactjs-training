import { types } from '../../store/actions/actionTypes';
import { reducer } from '../../store/reducers/todoReducer';

describe('Todo reducer test', () => {
	describe('Add todo item action', () => {
		it('Should add item to the existing ones', () => {
			const mockItems = [{id: 0, name: 'item0'}, {id: 1, name: 'item1'}];
			const result = reducer({items: mockItems, counter: 2}, {
				type: types.ADD_TODO_ITEM,
				payload: 'item2'
			});
			mockItems.push({id: 2, name: 'item2'});
			expect(result.items).toEqual(mockItems);
		});
	});

	describe('Remove todo item action', () => {
		it ('Should remove item from the existing ones', () => {
			const mockItems = [{id: 0, name: 'item0'}, {id: 1, name: 'item1'}];
			const result = reducer({items: mockItems, counter: 2}, {
				type: types.REMOVE_TODO_ITEM,
				payload: mockItems[1]
			});
			mockItems.splice(1, 1);
			expect(result.items).toEqual(mockItems);
		})
	})
});
