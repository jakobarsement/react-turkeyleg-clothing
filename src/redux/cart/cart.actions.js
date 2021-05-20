//Parents: none
//Children: cart.types

import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const decrementCartItem = (item) => ({
	type: CartActionTypes.DECREMENT_CART_ITEM,
	payload: item,
});

export const incrementCartItem = (item) => ({
	type: CartActionTypes.INCREMENT_CART_ITEM,
	payload: item,
});
