import { addItem, removeItem } from './actions';

export const addItemThunk = (product) => {
	return (dispatch) => {
		const list = JSON.parse(localStorage.getItem('cart')) || [];

		list.push(product);
		localStorage.setItem('cart', JSON.stringify(list));
		dispatch(addItem(product));
	};
};

export const removeItemThunk = (shoe) => (dispatch, getStore) => {
	const { cart } = getStore();
	const list = cart.filter((product) => shoe !== product);
	localStorage.setItem('cart', JSON.stringify(list));
	dispatch(removeItem(list));
};
