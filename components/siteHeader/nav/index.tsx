import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type NavbarProps = {
	navOpened: boolean;
	setNavOpened: (navOpened: boolean) => void;
	navSmoothTransition: boolean;
};
const Navbar = ({
	navOpened,
	setNavOpened,
	navSmoothTransition,
}: NavbarProps) => {
	const path = usePathname();

	const NavLink = ({
		href,
		children,
	}: {
		href: string;
		children: string;
	}) => {
		return (
			<Link
				href={href}
				className={`px-4 py-2 text-lg text-slate-700 duration-200 lg:cursor-pointer lg:transition-colors ${montserrat.className}`}
				onClick={() => {
					if (path === href) {
						setNavOpened(false);
					}
				}}
			>
				{children}
			</Link>
		);
	};

	return (
		<div
			className={`fixed left-0 top-0 -z-10 flex h-screen w-screen${
				navSmoothTransition ? " transition-all duration-300" : ""
			} ${
				navOpened
					? "bg-slate-400/30"
					: "pointer-events-none lg:pointer-events-auto"
			} lg:relative lg:z-0 lg:h-auto lg:w-auto`}
			onClick={() => setNavOpened(false)}
		>
			{/* Mobile navbar sidebar background has a brighter background than most Card-like components, including the parent header background, cause it looks weird when it's darker. */}
			<nav
				className={`fixed bottom-[0.5rem] top-[5.125rem] flex w-72 max-w-full flex-col items-center gap-10 rounded bg-slate-50/75 px-5 py-10 text-slate-50 shadow-md shadow-slate-400/30 backdrop-blur-md backdrop-filter lg:relative lg:w-fit lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:backdrop-filter-none ${
					navOpened ? "right-4" : "-right-72"
				} lg:right-0 lg:top-0${
					navSmoothTransition ? " transition-all duration-300" : ""
				}`}
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<NavLink href={"/"}>Home</NavLink>
				<NavLink href={"/about"}>About</NavLink>
				<NavLink href={"/projects"}>Projects</NavLink>
				{/*<NavLink href={"/blog"}>Blog</NavLink> Coming soon! Maybe. */}
				<NavLink href={"/contact"}>Contact</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;
