import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

//Parents: sign-up, sign-in components
export default CustomButton;
