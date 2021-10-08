import { addItem, removeItem } from './actions';

export const addItemThunk = (product) => {
	return (dispatch) => {
		const shoes = JSON.parse(localStorage.getItem('cart')) || [];

		shoes.push(product);
		localStorage.setItem('cart', JSON.stringify(shoes));
		dispatch(addItem(product));
	};
};

export const removeItemThunk = (shoe) => (dispatch, getStore) => {
	const { cart } = getStore();
	const shoes = cart.filter((product) => shoe !== product);
	localStorage.setItem('cart', JSON.stringify(shoes));
	dispatch(removeItem(shoes));
};
