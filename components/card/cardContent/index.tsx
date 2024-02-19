import { ReactNode } from "react";

const CardContent = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`flex w-full max-w-md flex-col px-4 sm:max-w-2xl [&_h1]:mb-5 [&_h1]:text-2xl [&_img]:mb-4 [&_img]:rounded [&_p:not(:last-child)]:mb-4 self-center${
				className ? ` ${className}` : ""
			}`}
		>
			{children}
		</div>
	);
};

export default CardContent;
