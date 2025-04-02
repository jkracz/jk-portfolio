import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Handle www to non-www redirect
  if (request.headers.get("host")?.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = newUrl.host.replace(/^www\./, "");
    return NextResponse.redirect(newUrl, 301);
  }

  // Handle trailing slashes
  if (request.nextUrl.pathname.endsWith("/") && request.nextUrl.pathname.length > 1) {
    const newUrl = new URL(request.url);
    newUrl.pathname = newUrl.pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
