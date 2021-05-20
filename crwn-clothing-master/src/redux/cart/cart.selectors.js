//This file is so that we can use memoization to render our cart-icon quantity value. Without memoization,
//we would have to re calculate the cart-item quantity every time we render a cart-icon.

//Connected through the "reselect" import.

import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
