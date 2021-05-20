//Parents: root.reducer
//Children: cart.types, cart.utils

import CartActionTypes from "./cart.types";
import {
	addItemToCart,
	clearItemFromCart,
	decrementCartItem,
	incrementCartItem,
} from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: clearItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.INCREMENT_CART_ITEM:
			return {
				...state,
				cartItems: incrementCartItem(state.cartItems, action.payload),
			};
		case CartActionTypes.DECREMENT_CART_ITEM:
			return {
				...state,
				cartItems: decrementCartItem(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
