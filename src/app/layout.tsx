import "@/styles/globals.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Portfolio | Silas Schulreich",
	description:
		"Hey, I’m Silas Schulreich — also known as Salliii. This is my portfolio, where you can learn more about me, explore selected projects, and get in touch via the contact form.",
	authors: [
		{ name: "Silas Schulreich", url: "https://salliii.dev" },
		{ name: "Salliii", url: "https://salliii.dev" },
	],
	keywords: [
		"Silas Schulreich",
		"Salliii",
		"salliii.dev",
		"Software Developer",
		"Electronics Technician",
		"Next.js",
		"Typescript",
		"Resend",
		"shadcn/ui",
		"tailwindcss",
		// project keywords
		"portfolio",
		"about",
		"projects",
	],
	creator: "Silas Schulreich",
	publisher: "Silas Schulreich",
	metadataBase: new URL("https://salliii.dev"),
	icons: "/favicon.ico",
};

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={"en"} suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
