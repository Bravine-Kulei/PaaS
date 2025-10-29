"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
	return (
		<nav className="w-full border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
				<Link href="/" className="font-semibold">Agri PaaS</Link>
				<div className="flex items-center gap-3">
					<SignedOut>
						<SignInButton>
							<button className="px-3 py-1.5 rounded bg-slate-900 text-white">Sign in</button>
						</SignInButton>
						<SignUpButton>
							<button className="px-3 py-1.5 rounded border">Sign up</button>
						</SignUpButton>
					</SignedOut>
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
			</div>
		</nav>
	);
}
