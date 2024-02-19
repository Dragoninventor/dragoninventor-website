import Link, { LinkProps } from "next/link";
import { Key, ReactNode } from "react";

const ProjectCardLink = ({
	href,
	key,
	linkText,
	icon,
	...props
}: {
	href: LinkProps["href"];
	key: Key;
	linkText: ReactNode;
	icon: ReactNode;
	props?: LinkProps;
}) => {
	return (
		<Link
			href={href}
			key={key}
			{...props}
			className={`flex items-center gap-1.5 text-sm text-indigo-500 underline transition-colors hover:text-indigo-700`}
		>
			<span className={""}>{linkText}</span>{" "}
			<span className={""}>{icon}</span>
		</Link>
	);
};
export default ProjectCardLink;
