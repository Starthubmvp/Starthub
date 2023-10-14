"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MyProjectsDonorCard from "../MyProjectDonorCard/MyProjectsDonorCard";
import { useTranslations } from "next-intl";

const MyProjectsTransactionDetails = (project) => {
	const [showAllDonors, setShowAllDonors] = useState(false);
	const [sortOrder, setSortOrder] = useState("desc");
	const t = useTranslations("MyProjectTransactionDetails");

	const sortAmounts = () => {
		const sortedAmounts = [...project.project.donations];
		if (sortOrder === "asc") {
			sortedAmounts.sort((a, b) => a.amount - b.amount);
		} else {
			sortedAmounts.sort((a, b) => b.amount - a.amount);
		}
		return sortedAmounts;
	};

	const displayedDonors = showAllDonors
		? sortAmounts()
		: sortAmounts().slice(0, 3);

	const handleSort = () => {
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};

	const handleViewMore = () => {
		setShowAllDonors(!showAllDonors);
	};

	const handleViewLess = () => {
		setShowAllDonors(false);
	};

	const displayDonationCards =
		displayedDonors.length <= 0 ? (
			<div className="text-center text-blackColor md:text-start">
				{t("Currently, no donations have been made")}
			</div>
		) : (
			displayedDonors.map((donation, i) => (
				<MyProjectsDonorCard key={i} donation={donation} />
			))
		);

	return null;
};

export default MyProjectsTransactionDetails;
