import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-light"
			style={{ backgroundColor: "rgb(20, 184, 200)" }}
		>
			<Link to="/home" style={{ flex: "auto", textAlign: "center" }}>
				<AiFillHome color="white" size="30px" />
			</Link>
		</nav>
	);
};

export default NavBar;
