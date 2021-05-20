import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IN5oCAog8W6s0mxemgTUgSGQoyDht4oY3wMdah1ZWJWgFJBIm4g9Dfd8bhf8Qzhg0ZwUTQgfzI4ucI7gfLk0AAf00nhZcrPxR";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
