"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
			<header className="w-full max-w-4xl flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Agri PaaS</h1>
				<div>
					<SignedOut>
						<div className="flex gap-3">
							<SignInButton>
								<button className="px-4 py-2 rounded bg-slate-900 text-white">Sign in</button>
							</SignInButton>
							<SignUpButton>
								<button className="px-4 py-2 rounded border">Sign up</button>
							</SignUpButton>
						</div>
					</SignedOut>
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
			</header>

			<section className="text-center max-w-2xl">
				<h2 className="text-4xl font-bold mb-3">Invest. Grow. Thrive.</h2>
				<p className="text-slate-600">
					Connect investors with verified farmers, manage funds transparently, and access authentic supplies.
				</p>
			</section>

			<nav className="flex gap-4">
				<Link href="/(dashboard)/farmer/dashboard" className="px-4 py-2 rounded border">Farmer Dashboard</Link>
				<Link href="/(dashboard)/investor/dashboard" className="px-4 py-2 rounded border">Investor Dashboard</Link>
			</nav>
		</main>
	);
}
