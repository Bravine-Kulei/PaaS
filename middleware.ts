/**
 * Next.js middleware for route protection
 */

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
	publicRoutes: [
		"/",
		"/sign-in(.*)",
		"/sign-up(.*)",
		"/api/(.*)",
	],
});

export const config = {
	matcher: [
		// Skip Next.js internals and static files, match all other routes
		"/((?!.+\.[\w]+$|_next).*)",
		"/(api|trpc)(.*)",
	],
};

