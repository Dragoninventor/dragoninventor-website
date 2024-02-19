import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const Logo = () => {
	return (
		<div className="z-10 flex flex-row items-center gap-2.5">
			<Link
				href={"/"}
				tabIndex={-1} // This is to prevent having to hit tab twice to get away from the home link for keyboard users
				className={`${montserrat.className} text-xl leading-tight text-neutral-700`}
			>
				Dragoninventor
			</Link>
		</div>
	);
};

export default Logo;
