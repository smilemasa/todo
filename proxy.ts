import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function proxy() {
    // Custom logic can go here if needed, but the main auth check is handled by withAuth
    // and the `pages` config below.
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Check for NextAuth token
        if (token) return true

        // Check for guest token cookie
        const guestToken = req.cookies.get("guest-token")
        if (guestToken) return true

        // Not authorized
        return false
      },
    },
    pages: {
      signIn: "/login",
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - login (login page)
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!login|api|_next/static|_next/image|favicon.ico|manifest.webmanifest|.*\\.png$).*)",
  ],
}
