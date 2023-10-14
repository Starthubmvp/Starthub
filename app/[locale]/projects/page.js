"use client";
import { useState } from "react";
import Categories from "../Components/Projects/Categories";
import Cards from "../Components/Projects/Cards";
import { useSelector } from "react-redux";

const Page = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const projects = useSelector((state) => state.auth.projects);
	const searchInputVal = useSelector(
		(state) => state.auth.searchInputVal
	);
	const showMobilNav = useSelector(
		(state) => state.auth.showMobilNav
	);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const filteredProjects =
		selectedCategory === "all"
			? projects
			: projects.filter(
					(project) => project.category === selectedCategory
			  );

	if (searchInputVal) {
		return (
			<div
				className={`pt-[calc(70px+2rem)]  ${
					showMobilNav && "mt-[200px]"
				}`}
			>
				<Categories
					selectedCategory={selectedCategory}
					handleCategoryChange={handleCategoryChange}
				/>
				<Cards projects={filteredProjects} />
			</div>
		);
	}
	return (
		<div className="bg-whiteColor">
			<div className="pt-[55px]">
				<projects />
			</div>

			<div style={{ marginTop: "100px" }}>
				<Cards projects={filteredProjects} />
			</div>
		</div>
	);
};
export default Page;
