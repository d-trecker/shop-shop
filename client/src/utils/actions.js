//Used by ProductList comp. We want to store data retireved by Apollo in this global state so we can add offline cap. later.
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// Retrieves data from server and store it in global state. 
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//A connecting piece to the previous two actions. 
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';