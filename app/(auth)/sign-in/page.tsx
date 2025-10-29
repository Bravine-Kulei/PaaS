"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<div className="w-full max-w-md">
			<SignIn
				appearance={{
					elements: {
						card: "shadow-lg",
						formButtonPrimary: "bg-slate-900 hover:bg-slate-800",
						footer: "hidden",
					},
				}}
			/>
		</div>
	);
}
