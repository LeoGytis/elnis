import type {Metadata} from "next";
import {Inter, Lexend_Exa} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lexendExa = Lexend_Exa({subsets: ["latin"]});
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Elnis",
	description: "Elnis Internetines paslaugos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lexendExa.className}>{children}</body>
		</html>
	);
}
