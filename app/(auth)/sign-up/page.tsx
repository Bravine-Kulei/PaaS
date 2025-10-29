"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<div className="w-full max-w-md">
			<SignUp
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
