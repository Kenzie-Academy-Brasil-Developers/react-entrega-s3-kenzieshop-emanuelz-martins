import { ADD_ITEM, REMOVE_ITEM } from './actionsTypes';

const cartReducer = (
	state = JSON.parse(localStorage.getItem('cart')) || [],
	action
) => {
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
