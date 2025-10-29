import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export const metadata = {
	title: "Agricultural PaaS",
	description: "Investors and farmers platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
