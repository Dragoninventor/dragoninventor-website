import Link from "next/link";
import { DateTime } from "luxon";
import { Cairo } from "next/font/google";
import { ReactNode } from "react";
import { AiFillHeart, AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Card from "@/components/card";
import { BsArrowRight } from "react-icons/bs";

const cairo = Cairo({ subsets: ["latin"] });

const SiteFooter = () => {
	const FooterLink = ({
		href,
		children,
		icon,
	}: {
		href: string;
		children: ReactNode;
		icon: ReactNode;
	}) => {
		return (
			<Link
				href={href}
				className={"flex items-center gap-2 text-gray-700 underline"}
			>
				{icon}
				{children}
			</Link>
		);
	};

	return (
		<div className={"mt-auto w-full"}>
			<Card
				className={`${cairo.className} mb-2 mt-2.5 flex w-auto flex-col items-center px-8 py-12 !text-gray-800`}
			>
				<footer>
					<div className={"flex flex-col gap-10"}>
						<div className="grid grid-flow-row auto-rows-auto gap-2.5">
							<FooterLink
								href="/"
								icon={<AiFillHome size={"1.25em"} />}
							>
								Home
							</FooterLink>
							<FooterLink
								href="/about"
								icon={<AiFillInfoCircle size={"1.25em"} />}
							>
								About Me
							</FooterLink>
							<FooterLink
								href="/projects"
								icon={<AiFillHeart size={"1.25em"} />}
							>
								Projects
							</FooterLink>
						</div>

						<p className={"flex flex-col items-start gap-2"}>
							Have any questions or issues?{" "}
							<Link
								href={"/contact"}
								className={
									"flex items-center gap-1.5 rounded border-2 border-slate-200 px-5 py-2.5 text-slate-700 underline"
								}
							>
								Contact Me{" "}
								<BsArrowRight
									size={"1em"}
									className={`inline-block`}
								/>
							</Link>
						</p>
						<p className={""}>
							Copyright 2023-{DateTime.now().year},
							Dragoninventor. All rights reserved.
						</p>
					</div>
				</footer>
			</Card>
		</div>
	);
};

export default SiteFooter;
