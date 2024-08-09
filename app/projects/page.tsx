import { Metadata, NextPage } from "next";
import haveASafeDriveImage from "/public/haveasafedrive.png";
import pennLegalImage from "/public/pennlegal.png";
import adviceOnFireImage from "/public/adviceonfire.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from "@/components/projectCard";
import ProjectCardLink from "@/components/projectCard/projectCardLink";
import CardPage from "@/components/card/cardPage";

export const metadata: Metadata = {
	title: "My Projects",
};

const Projects: NextPage = () => {
	return (
		<CardPage>
			<h1 className={`mb-7 text-center`}>My Projects</h1>
			<ul className={"grid gap-4"}>
				<ProjectCard
					name={"Have A Safe Drive"}
					description={
						"A website for online defensive driving courses."
					}
					image={{
						src: haveASafeDriveImage,
						alt: "Have A Safe Drive",
					}}
					links={[
						<ProjectCardLink
							href={
								"https://github.com/Dragoninventor/have-a-safe-drive"
							}
							key={"github"}
							linkText={"Github"}
							icon={<FaGithub />}
							disabled={true}
						/>,
					]}
				/>
				<ProjectCard
					name={"Penn Legal LPP"}
					description={"A portfolio for a talented paralegal."}
					image={{
						src: pennLegalImage,
						alt: "Penn Legal LPP",
					}}
					links={[
						<ProjectCardLink
							href={"https://pennlegallpp.com/"}
							key={"website"}
							linkText={"Website"}
							icon={<FaExternalLinkAlt />}
						/>,
					]}
				/>
				<ProjectCard
					name={"Advice On Fire"}
					description={"A blog for a wise writer and friend."}
					image={{
						src: adviceOnFireImage,
						alt: "Advice On Fire",
					}}
					links={[
						<ProjectCardLink
							href={"https://adviceonfire.com/"}
							key={"website"}
							linkText={"Website"}
							icon={<FaExternalLinkAlt />}
						/>,
						<ProjectCardLink
							href={
								"https://github.com/Dragoninventor/advice-on-fire"
							}
							key={"github"}
							linkText={"Github"}
							icon={<FaGithub />}
							disabled={true}
						/>,
					]}
				/>
			</ul>
		</CardPage>
	);
};

export default Projects;
