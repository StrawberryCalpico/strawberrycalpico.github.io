import React from "react";
import Introduction from "./Introduction";

const Home: React.FC = () => {
	const projects = [
		{
			id: 1,
			title: "Star Book",
			thumbnail: "/starbook.png",
			description: "Kpop card trading website",
			url: "https://github.com/StrawberryCalpico/starbooktrading",
		},
		{
			id: 2,
			title: "Due Tonight",
			thumbnail: "/DueTonight.png",
			description: "A 2d fighting game in Unity",
			url: "https://m2neko.itch.io/duetonight",
		},
		{
			id: 3,
			title: "Project Holder",
			thumbnail: "/P1.jpeg",
			description: "More projects coming in...",
			url: "/project/3",
		},
		{
			id: 4,
			title: "Project Holder",
			thumbnail: "/P1.jpeg",
			description: "More projects coming in...",
			url: "/project/4",
		},
		{
			id: 5,
			title: "Project Holder",
			thumbnail: "/P1.jpeg",
			description: "More projects coming in...",
			url: "/project/5",
		},
	];
	return (
		<>
			<Introduction />
			<div className="bg-gray-100 p-4">
				<h1 className="text-custom-green text-2xl font-semibold mb-4 mx-auto text-center border-b-2">
					Welcome to Ruike's Projects
				</h1>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{projects.map((project) => (
						<a
							href={`${project.url}`}
							key={project.id}
							className="bg-gray-100 z-10 hover:z-50 rounded-[8px] p-[1rem] mb-[1rem] cursor-pointer border-solid border-[0.7px] border-[#ccc] hover:scale-[1.2] transform transition-transform duration-[500]"
						>
							<img
								src={project.thumbnail}
								alt={project.title}
								className="mb-2"
								style={{ width: "200px", height: "150px" }}
							/>
							<h3 className="text-lg font-bold">
								{project.title}
							</h3>
							<p>{project.description}</p>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
