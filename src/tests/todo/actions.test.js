import { actions } from '../../store/reducers/todoReducer';
import { types } from '../../store/actions/actionTypes';

describe('Todo action creator test', () => {
	describe('Add todo item action', () => {
		it ('Should contain the ADD_TODO_ITEM action type', () => {
			const result = actions.addTodoItem('item0');
			expect(result.type).toEqual(types.ADD_TODO_ITEM);
		});

		it ('Should have the name in the action payload', () => {
			const result = actions.addTodoItem('todoItem');
			expect(result.payload).toEqual('todoItem');
		})
	});
	describe('Remove todo item action', () => {
		it ('Should contain the REMOVE_TODO_ITEM action type', () => {
			const result = actions.removeTodoItem('item0');
			expect(result.type).toEqual(types.REMOVE_TODO_ITEM);
		});

		it ('Should have the item in the action payload', () => {
			const result = actions.removeTodoItem({id: 0, item: 'item'});
			expect(result.payload).toEqual({id: 0, item: 'item'});
		})
	});
});