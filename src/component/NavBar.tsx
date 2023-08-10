import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="p-4 bg-custom-green">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-black text-xl font-semibold">
					Ruike Qiu
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
