import { FormEvent, ReactNode } from "react";

type FormProps = {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
};
const CardForm = ({ onSubmit, children }: FormProps) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		onSubmit(event);
	};

	return (
		<form className={``} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default CardForm;
