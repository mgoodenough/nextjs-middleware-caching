import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - image files
     * - static files
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|.*\\..*|static|_next/static|_next/image|favicon.ico).*)',
  ],
}

export default async function middleware(request:NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers)
  
  // Set a new response header
  requestHeaders.set("x-middleware-cache", "no-cache");
 
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders
    }
  })
 
  // Set a new response header
  response.headers.set("x-middleware-cache", "no-cache");

  console.log(pathname);
  return response
}