"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { useTranslations } from "next-intl";

function Footer() {
	const projects = useSelector((state) => state.auth.projects);
	const t = useTranslations("Footer");
	const dispatch = useDispatch();

	const projectsWithTotalDonate = projects.map((project) => {
		const totalDonations = project.donations.reduce(
			(total, donation) => total + Number(donation.amount),
			0
		);
		return {
			project,
			totalDonations,
		};
	});

	let popularProjects = [];

	if (projects.length === 1) {
		popularProjects = projectsWithTotalDonate;
	} else {
		popularProjects = projectsWithTotalDonate
			.sort((a, b) => b.totalDonations - a.totalDonations)
			.slice(1, 3);
	}

	return (
		<footer
			className="bg-greenColor pt-5 md:pt-10 text-center md:text-left text-whiteColor"
			style={{ backgroundColor: "#0d291a", paddingTop: "80px" }}
			data-testid="footer"
		>
			<div className="container mx-auto px-4">
				<div className='border-b border-whiteColor pb-5 md:pb-10"'>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
						<div className="firstcolumn flex flex-col order-3 md:order-1">
							<h1 className="font-semibold text-l sm:text-xl md:text-2xl py-4">
								{t("StartHubTitle")}
							</h1>
							<p>{t("StartHubDescription")}</p>
							<div className="icons flex py-10 space-x-5 md:space-x-8 justify-center  md:justify-start">
								<Link
									href="https://www.instagram.com/"
									target="blank"
									className="flex hover:opacity-60"
								>
									<FaInstagram className="text-3xl" />
								</Link>
								<Link
									href="https://www.facebook.com/"
									target="blank"
									className="flex hover:opacity-60"
								>
									<FaFacebook className="text-3xl" />
								</Link>
								<Link
									href="https://twitter.com/"
									target="blank"
									className="flex hover:opacity-60"
								>
									<FaTwitter className="text-3xl" />
								</Link>
							</div>
						</div>

						<div className="thirdcolumn order-1 md:order-3">
							
							
						</div>
					</div>
				</div>
				<p className="text-center py-8">
					<FaCopyright className="inline-block mr-2" />
					{t("allRightsReserved")}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
