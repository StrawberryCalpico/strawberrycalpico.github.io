import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="p-4 bg-custom-green flex">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-black text-xl font-semibold">
					Ruike Qiu
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<a
					href="https://www.linkedin.com/in/ruike-qiu-b7564a24b/"
					className="cursor-pointer"
				>
					<img src={"linkedin.svg"} alt="Icon 1" className="h-6" />
				</a>
				<a
					href="https://github.com/StrawberryCalpico"
					className="cursor-pointer"
				>
					<img
						src={"logo-github.svg"}
						alt="Icon 2"
						className="h-6 cursor-pointer"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
