"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuButton from "./menuButton";
import Nav from "@/components/siteHeader/nav";
import Logo from "@/components/siteHeader/logo";

const SiteHeader = () => {
	const [navOpened, setNavOpened] = useState(false);
	const [navSmoothTransition, setNavSmoothTransition] = useState(true);
	const [headerFill, setHeaderFill] = useState(false); // Sets
	const pathname = usePathname();

	const listenScrollEvent = () => {
		if (window.scrollY >= 70) {
			// About when a card component (with a light background) will render fully behind the navbar, will make the transition to being partially transparent more subtle
			setHeaderFill(true);
		} else {
			setHeaderFill(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);

		return () => window.removeEventListener("scroll", listenScrollEvent);
	}, []);

	useEffect(() => {
		setNavSmoothTransition(false);
		setNavOpened(false);
	}, [pathname]);

	useEffect(() => {
		if (navOpened) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [navOpened]);

	const toggleNav = () => {
		setNavSmoothTransition(true);
		setNavOpened(!navOpened); // 1.5 + 16 + 3
	};

	return (
		// Background of header is using a :before pseudo-element so that it can use backdrop-filter without breaking the child navbar's "position: fixed" property. If the parent element of a position fixed child uses any transform or filter it makes children with "position: fixed" behave like "position: absolute:". Go figure.
		<div className={"sticky left-0 top-0 z-50 flex w-full pb-2 pt-2.5"}>
			<header
				className={`relative flex h-16 w-full flex-row items-center justify-between rounded border-y border-slate-200 px-4 transition-colors before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:rounded before:shadow-md before:shadow-slate-400/30 before:backdrop-blur-md before:backdrop-filter ${
					headerFill
						? `duration-300 before:bg-slate-100/75`
						: `before:bg-slate-100`
				}`}
			>
				<Logo />
				<Nav
					navOpened={navOpened}
					setNavOpened={setNavOpened}
					navSmoothTransition={navSmoothTransition}
				/>
				<MenuButton navOpened={navOpened} toggleNav={toggleNav} />
			</header>
		</div>
	);
};

export default SiteHeader;
