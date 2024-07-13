import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

{/* Protecting the settings route*/}
const isProtectedRoute = createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth, req) => {
  {/* To check if the route requires protection.
If the route is protected, is called to enforce authentication. */}
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

