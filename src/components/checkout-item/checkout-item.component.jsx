import React from "react";
import {
	clearItemFromCart,
	incrementCartItem,
	decrementCartItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
	cartItem,
	clearItemFromCart,
	incrementCartItem,
	decrementCartItem,
}) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity" unselectable="on">
				<span
					className="item-decrementer"
					onClick={() => {
						decrementCartItem(cartItem);
					}}
				>
					&#10094;{" "}
				</span>
				{quantity}
				<span
					className="item-incrementer"
					onClick={() => incrementCartItem(cartItem)}
				>
					{" "}
					&#10095;
				</span>
			</span>
			<span className="price">${price}</span>
			<div
				className="remove-button"
				onClick={() => clearItemFromCart(cartItem)}
			>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
	incrementCartItem: (cartItem) => dispatch(incrementCartItem(cartItem)),
	decrementCartItem: (cartItem) => dispatch(decrementCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
