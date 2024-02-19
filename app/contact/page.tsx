import ContactForm from "@/components/contactForm";
import CardPage from "@/components/card/cardPage";

const Contact = () => {
	return (
		<CardPage>
			<h1 className={"mb-2.5 text-center"}>Contact</h1>
			<ContactForm />
		</CardPage>
	);
};

export default Contact;
