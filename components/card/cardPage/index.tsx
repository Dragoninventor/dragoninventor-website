import { ReactNode } from "react";
import Card from "@/components/card";
import CardContent from "@/components/card/cardContent";

const CardPage = ({ children }: { children: ReactNode }) => {
	return (
		<Card
			className={
				"flex w-full flex-col items-center px-4 pb-16 pt-12 sm:px-8 md:max-w-5xl"
			}
			properties={{ fillPageHeight: true }}
		>
			<CardContent>
				<main>{children}</main>
			</CardContent>
		</Card>
	);
};

export default CardPage;
