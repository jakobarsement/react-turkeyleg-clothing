//Parents: sign-in-and-sign-up component
//Children: form-input, custom-button, firebase.utils components

import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

//React class-component since this was developed before functional components were most popular and were able to leverage state
class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	//Prevents default form from refreshing screen, then takes the current state of the sign-in forms and uses their
	//values to sign in through the below firebase function.
	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	//Keeps track of each field's current value by saving it to state everytime it changes.
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	//Below is the html-jsx that is rendered to the screen and updates the state for the sign-in component
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							{" "}
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
