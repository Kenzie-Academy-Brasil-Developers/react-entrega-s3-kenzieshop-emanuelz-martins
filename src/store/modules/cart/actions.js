import { ADD_ITEM, REMOVE_ITEM } from './actionsTypes';

export const addItem = (product) => ({ type: ADD_ITEM, product });

export const removeItem = (list) => ({ type: REMOVE_ITEM, list });
