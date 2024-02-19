type MenuButtonProps = {
	navOpened: boolean;
	toggleNav: () => void;
};

const MenuButton = ({ navOpened, toggleNav }: MenuButtonProps) => {
	const barStyles =
		"transform rounded border-b-2 border-current transition-all duration-300 ease-in-out"; // I'm using borders so that the lines look less blurry/inconsistent at certain screen resolutions
	// Edit: I don't think this actually makes a difference, but I'm keeping it
	const barWidths = ["2.25rem", "2rem", "1.75rem"];

	const translateYOffset = "0.25rem"; // Moves the top and bottom lines out a little to make the symmetrical x bigger
	const adjustedBarWidth = `calc(${barWidths[2]} + (${translateYOffset} * 2))`; // Calculates the width the top and bottom bars should be once rotated

	return (
		<button
			className="z-10 flex flex-col items-end text-gray-600 lg:hidden"
			onClick={toggleNav}
			aria-label={"Open main menu"}
		>
			<span
				className={`${barStyles} origin-[right_center] ${
					navOpened ? "-rotate-45" : ""
				}`}
				style={{
					translate: navOpened
						? `0 calc(-1 * ${translateYOffset} * cos(45deg))`
						: "0 0",
					width: navOpened ? adjustedBarWidth : barWidths[0],
				}}
			></span>
			<span
				className={`${barStyles} mt-2 ${navOpened ? "opacity-0" : ""}`}
				style={{
					width: navOpened ? "0" : barWidths[1],
				}}
			></span>
			<span
				className={`${barStyles} mt-2 origin-[right_center]${
					navOpened ? ` rotate-45` : ""
				}`}
				style={{
					translate: navOpened
						? `0 calc(${translateYOffset} * cos(45deg))`
						: "0 0",
					width: navOpened ? adjustedBarWidth : barWidths[2],
				}}
			></span>
		</button>
	);
};

export default MenuButton;
