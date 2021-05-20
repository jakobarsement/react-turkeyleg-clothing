//Parents: sign-in, sign-up components

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBddoqYOOd7pWWk_BrxzacjKBUN0FVpZFc",
	authDomain: "crwn-db-83ac1.firebaseapp.com",
	projectId: "crwn-db-83ac1",
	storageBucket: "crwn-db-83ac1.appspot.com",
	messagingSenderId: "484557956177",
	appId: "1:484557956177:web:cd7e98dd844f53d9de8470",
	measurementId: "G-4PR1KEHTKN",
};

firebase.initializeApp(config);

//Export this function to sign-up document for authentication
export const createUserProfileDocument = async (userAuth, additionalData) => {
	//IF user exists
	if (!userAuth) return;

	//THEN set userRef to that user location in the DB
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	//GIVEN the snapshot exists
	//THEN set the userRef to that current snapshot info
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user.", error.message);
		}
	}

	return userRef;
};

//Export these for future use in files
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Set Google as a provider and link to their function
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
