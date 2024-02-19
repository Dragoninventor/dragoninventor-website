import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import { ContactEmail } from "@/components/contactEmail";

const sendEmail = async ({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) => {
	const transporter = createTransport({
		host: process.env.EMAIL_HOST,
		port: Number(process.env.EMAIL_PORT) || 0,
		secure: false,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const emailHtml = render(
		<ContactEmail name={name} email={email} message={message} />,
	);

	const mailOptions = {
		from: email,
		to: process.env.EMAIL,
		subject: `Message from ${name} - Dragoninventor Contact Form`,
		html: emailHtml,
	};

	// Send the email
	const info = await transporter.sendMail(mailOptions);
	console.log("Email sent:", info.messageId);
};

export default sendEmail;
