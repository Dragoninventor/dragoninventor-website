import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SiteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/siteFooter";
import HomeBackground from "@/components/siteBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "Dragoninventor – %s",
		default: "Dragoninventor - Web Developer and Inventor of Dragons",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en-us">
			<body
				className={`${inter.className} relative flex min-h-screen flex-col items-center px-4`} // bg-indigo-200
				style={{
					background:
						"linear-gradient(160deg, rgba(87,106,168,1) 0%, rgba(115,132,196,1) 10%, rgba(152,164,219,1) 40%, rgba(197,189,247,1) 75%, rgba(204,163,231,1) 100%)",
				}}
			>
				<SiteHeader />
				<HomeBackground />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
