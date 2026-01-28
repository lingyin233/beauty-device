import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-pathname", request.nextUrl.pathname);
  
  const c = cookies();

  if (!c.get("token")) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next(); // allow login page only
    }
    const clonedUrl = request.nextUrl.clone();
    clonedUrl.pathname = "/login";
    return NextResponse.redirect(clonedUrl);
  }

  if (request.nextUrl.pathname === "/") {
    const clonedUrl = request.nextUrl.clone();
    clonedUrl.pathname = "/admin/dashboard";
    return NextResponse.redirect(clonedUrl);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
