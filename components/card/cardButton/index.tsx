import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler } from "react";

type CardButtonProps = {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick?: MouseEventHandler<HTMLButtonElement>;
	processing?: boolean;
	primary?: boolean;
	disabled?: boolean;
	formNoValidate?: boolean;
	className?: string;
	style?: CSSProperties;
	children: string;
};

const CardButton = (props: CardButtonProps) => {
	return (
		<button
			className={`${props.className ? ` ${props.className}` : ""}${
				props.primary ? ` ` : ""
			}`}
			style={props.style}
			onClick={props.onClick}
			type={props.type}
			disabled={
				props.processing ||
				props.disabled ||
				(!props.onClick && props.type !== "submit")
			}
			formNoValidate={props.formNoValidate}
		>
			{props.processing ? (
				<span className={``}>{props.children}</span>
			) : (
				<span>{props.children}</span>
			)}
		</button>
	);
};

export default CardButton;
