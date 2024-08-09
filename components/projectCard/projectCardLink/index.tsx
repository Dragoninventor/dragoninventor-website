import Link, { LinkProps } from "next/link";
import { Key, ReactNode } from "react";

const ProjectCardLink = ({
	href,
	key,
	linkText,
	icon,
	className,
	disabled,
	...props
}: {
	href: LinkProps["href"];
	key: Key;
	linkText: ReactNode;
	icon: ReactNode;
	className?: string;
	disabled?: boolean;
	props?: LinkProps;
}) => {
	return (
		<Link
			href={href}
			key={key}
			aria-disabled={disabled}
			tabIndex={disabled ? -1 : undefined}
			className={`flex items-center gap-1.5 text-sm  underline transition-colors${className ? ` ${className}` : ""}${disabled ? " pointer-events-none text-gray-600" : " text-indigo-500 hover:text-indigo-700"}`}
			{...props}
		>
			<span className={""}>{linkText}</span>{" "}
			<span className={""}>{icon}</span>
		</Link>
	);
};
export default ProjectCardLink;
