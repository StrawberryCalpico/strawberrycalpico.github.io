import React, { useState } from "react";

const Introduction: React.FC = () => {
	const [aboutActive, setAboutActive] = useState(true);
	const [academicActive, setAcademicActive] = useState(false);
	const [skillActive, setSkillActive] = useState(false);

	const handleAbout = () => {
		setAboutActive(true);
		setAcademicActive(false);
		setSkillActive(false);
	};

	const handleAcademic = () => {
		setAboutActive(false);
		setAcademicActive(true);
		setSkillActive(false);
	};

	const handleSkill = () => {
		setAboutActive(false);
		setAcademicActive(false);
		setSkillActive(true);
	};

	return (
		<div className="bg-gray-100 p-4 h-1/2 flex justify-center items-center flex-row">
			<div className="w-1/2">
				<div className="flex flex-row">
					<h2
						onClick={handleAbout}
						className={
							"text-custom-green text-xs sm:text-base md:text-xl lg:text-2xl font-semibold mb-4 mx-auto text-center border-b-4 cursor-pointer hover:scale-[1.2] transform transition-transform duration-[500] " +
							(aboutActive ? "border-fuchsia-400" : "")
						}
					>
						About Me
					</h2>
					<h2
						onClick={handleAcademic}
						className={
							"text-custom-green text-xs sm:text-base md:text-xl lg:text-2xl font-semibold mb-4 mx-auto text-center border-b-4 cursor-pointer hover:scale-[1.2] transform transition-transform duration-[500] " +
							(academicActive ? "border-fuchsia-400" : "")
						}
					>
						Academic
					</h2>
					<h2
						onClick={handleSkill}
						className={
							"text-custom-green text-xs sm:text-base md:text-xl lg:text-2xl font-semibold mb-4 mx-auto text-center border-b-4 cursor-pointer hover:scale-[1.2] transform transition-transform duration-[500] " +
							(skillActive ? "border-fuchsia-400" : "")
						}
					>
						Skills
					</h2>
				</div>
				{aboutActive ? (
					<>
						<p className="text-xs md:text-lg text-center">
							Hi! I'm Ruike, a new graduate Software Developer who
							is passionate about Coding! I have knowledge of Full
							stack development, data structure and algorithms,
							machine learning, computer networking, etc. I am
							looking for full time opportuniteis! Feel free to
							contact me at{" "}
							<a
								className="underline decoration-solid underline-offset-8 cursor-pointer"
								href="mailto:rq2046@nyu.edu"
							>
								rq2046@nyu.edu
							</a>
						</p>
					</>
				) : (
					<> </>
				)}
				{academicActive ? (
					<>
						<p className="text-xs md:text-lg text-center">
							Master's degree in Computer Engineering from New
							York University
						</p>
						<p className="text-xs md:text-lg text-center">
							Bachelor's degree in Computer Science and Economics
							from UC Davis
						</p>
						<br />
						<br />
					</>
				) : (
					<></>
				)}
				{skillActive ? (
					<>
						<p className="text-xs md:text-lg text-center">
							Programming language: Python, JavaScript, Java, C,
							C++, Golang
						</p>
						<p className="text-xs md:text-lg text-center">
							Framework: React, Express, MongoDB, NodeJS, JWT
						</p>
						<br />
						<br />
					</>
				) : (
					<> </>
				)}
			</div>
			<div className="w-1/2">
				<img
					src="/p3.png"
					className="w-2/3 h-2/3 ml-[50px] md:ml-[80px]"
				/>
			</div>
		</div>
	);
};

export default Introduction;
