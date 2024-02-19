"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import rocks from "@/public/rocks.jpg";

const HomeBackground = () => {
	const pathname = usePathname();

	return (
		<div
			className={`fixed left-0 top-0 -z-10 mx-auto h-screen w-screen bg-cover motion-safe:transition-all ${
				pathname === "/" ? "opacity-100" : "translate-y-1 opacity-0"
			}`}
			style={{
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
			}}
		>
			<Image
				src={rocks}
				alt={"Mountains"}
				fill={true}
				className={
					"select-none object-cover object-top xl:object-center"
				}
				quality={100}
			/>
		</div>
	);
};

export default HomeBackground;
