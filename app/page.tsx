import { Metadata, NextPage } from "next";
import Logo from "@/public/dragoninventor_logo.svg";
import Image from "next/image";
import { Open_Sans, Saira } from "next/font/google";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import CardPage from "@/components/card/cardPage";

const saira = Saira({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	description:
		"I am Michael Hudson, creator of dragons: creative websites with heart and passion poured into them. I specialize in building fast, responsive, and accessible websites using modern technologies.",
};

const Home: NextPage = () => {
	return (
		<CardPage>
			<main className="flex flex-col">
				{/* TEXT */}
				<div
					className={
						"mb-7 flex w-fit flex-col md:px-5 md:py-10 lg:gap-5"
					}
				>
					<h1 className={`${saira.className} flex flex-col`}>
						<span
							className={
								"text-2xl font-light text-gray-950 lg:text-3xl"
							}
						>
							I am
						</span>{" "}
						<span
							className={
								"text-4xl font-medium text-gray-950 lg:text-5xl"
							}
						>
							Dragoninventor
						</span>
					</h1>
					<h2
						className={`${openSans.className} text-lg font-light text-gray-700`}
					>
						I create dragons: creative websites with heart and
						passion poured into them. I specialize in building fast,
						responsive, and accessible websites using modern
						technologies.
					</h2>
				</div>
				{/* LOGO */}
				<div className={"mb-4 flex w-full justify-center px-4"}>
					<Image
						src={Logo}
						alt={"Logo"}
						className={"w-full max-w-[12rem] md:max-w-sm"}
					/>
				</div>
				<div className={"flex w-full flex-col items-center gap-2.5"}>
					<Link
						href={"/projects"}
						className={
							"flex items-center gap-1.5 rounded border-2 border-slate-200 bg-gray-50 px-5 py-2.5 text-slate-700"
						}
					>
						<span>See my work </span>
						<BsArrowRight
							size={"1em"}
							className={`ml-1 inline-block`}
						/>
					</Link>
				</div>
			</main>
		</CardPage>
	);
};

export default Home;
