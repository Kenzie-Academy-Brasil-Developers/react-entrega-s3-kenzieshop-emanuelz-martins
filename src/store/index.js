import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './modules/product/reducers';
import cartReducer from './modules/cart/reducers';

const reducers = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
