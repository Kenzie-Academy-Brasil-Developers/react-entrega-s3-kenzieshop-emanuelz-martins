import { ADD_ITEM, REMOVE_ITEM } from './actionsTypes';

const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			const { product } = action;
			return [...state, product];
		case REMOVE_ITEM:
			const { list } = action;
			return list;
		default:
			return state;
	}
};

export default cartReducer;
