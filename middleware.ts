import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    response.cookies.set("preferred_lang", "zh", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  } else if (pathname === "/") {
    response.cookies.set("preferred_lang", "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  }

  return response;
}

export const config = {
  matcher: ["/", "/zh", "/zh/:path*"],
};
