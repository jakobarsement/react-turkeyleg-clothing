//Parent: App
//Children: directory component

import React from "react";
// import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";

import "../homepage/homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<Directory />
	</div>
);

export default HomePage;
