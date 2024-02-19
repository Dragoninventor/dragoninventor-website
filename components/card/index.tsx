import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

const Card = ({
	children,
	className,
	properties,
}: {
	children: ReactNode;
	className?: string;
	properties?: {
		fillPageHeight?: boolean;
	};
}) => {
	return (
		<div
			className={`${
				openSans.className
			} rounded bg-slate-100 shadow-md shadow-slate-400/30${
				properties?.fillPageHeight
					? " flex-grow"
					: // ? " min-h-[calc(100vh-0.375rem-4rem-0.5rem-0.375rem)]"
						// Card height = Page height - root layout top padding -  navbar height - navbar bottom margin - root layout bottom padding
						""
			}${
				className
					? ` ${className}`
					: " flex flex-col gap-2.5 px-5 pb-12 pt-8"
			}`}
		>
			{children}
		</div>
	);
};

export default Card;
