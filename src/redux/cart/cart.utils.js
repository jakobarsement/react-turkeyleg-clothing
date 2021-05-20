//Parents: cart.reducer
//Children: none

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//decrements quantity of a checkout-item as long as the quantity is above zero
export const decrementCartItem = (cartItems, cartItemToDecrement) => {
	if (cartItemToDecrement.quantity > 0) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToDecrement.id && cartItem.id !== 0
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	} else {
		return cartItems;
	}
};

//increments quantity of a checkout-item
export const incrementCartItem = (cartItems, cartItemToIncrement) => {
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToIncrement.id
			? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem
	);
};
