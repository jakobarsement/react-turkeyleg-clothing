//This file is so that we can use memoization to load our directory.

import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);
