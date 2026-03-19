import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

//fill with routes a user should NOT be able to access if not logged in
const isProtectedRoute = createRouteMatcher([
  "/home(.*)",
]);

//feel free to add additonal logic to do role based protection and other cool features

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}