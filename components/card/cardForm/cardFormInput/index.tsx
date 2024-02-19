import React, {
	DetailedHTMLProps,
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
} from "react";

type FormInput = {
	type: HTMLInputTypeAttribute;
	id: string;
	label: string;
	invalid?: boolean;
};
type FormInputProps = FormInput &
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormInput = (props: FormInputProps) => {
	switch (props.type) {
		case "checkbox" || "radio":
			return (
				<label className={``} htmlFor={props.id}>
					{props.label}
					<input
						type={props.type}
						className={``}
						id={props.id}
						checked={props.checked}
						onChange={props.onChange}
						required={props.required}
					/>
					<span className={``} />
				</label>
			);
		default:
			return (
				<div
					className={`${
						props.className ? `${props.className} ` : ""
					}${`flex flex-col bg-neutral-50`}${
						props.invalid ? ` ${``}` : ""
					}`}
				>
					<label className={``} htmlFor={props.id}>
						{props.label}
					</label>
					<input
						type={props.type}
						className={`border bg-neutral-50 p-2.5 text-neutral-900`}
						id={props.id}
						value={props.value}
						onChange={props.onChange}
						placeholder={props.placeholder}
						autoFocus={props.autoFocus}
						required={props.required}
					/>
				</div>
			);
	}
};

export default FormInput;
