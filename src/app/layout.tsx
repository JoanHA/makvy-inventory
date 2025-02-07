import type { Metadata } from "next";

import "./globals.css";
import Header from "./_ui/Header";

export const metadata: Metadata = {
	title: "Makvy Store",
	description: "A store with love",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				
					<Header></Header>
					{children}
			
			</body>
		</html>
	);
}
