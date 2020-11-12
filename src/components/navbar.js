import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav
			className="navbar navbar-light"
			style={{ marginBottom: 50, backgroundColor: "rgb(20, 184, 200)" }}
		>
			<a className="navbar-brand" href="#" style={{ color: "white" }}>
				Navbar
				<span className="badge badge-pill badge-secondary m-2"></span>
			</a>
		</nav>
	);
};

export default NavBar;
