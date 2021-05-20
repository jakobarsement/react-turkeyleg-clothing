//This file is so that we can use memoization to load our user. Without memoization,
//we would have to re calculate the user authentication every time we render a component that depends on user state.

import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);
