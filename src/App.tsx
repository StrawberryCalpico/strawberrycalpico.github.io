import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/NavBar";
import Home from "./component/Home";

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<div className="container mx-auto mt-8">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
