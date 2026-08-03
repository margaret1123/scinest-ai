import { type NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "scinest.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Redirect all page requests from non-canonical hosts to scinest.app
  // Exclude: API routes, Next internals, static assets, sitemaps, robots.txt
  if (host !== CANONICAL_HOST && !host.startsWith("localhost") && !host.startsWith("127.0.0.1")) {
    const isApi = pathname.startsWith("/api/");
    const isNextInternal = pathname.startsWith("/_next/");
    const isStatic = /\.(svg|png|webp|jpg|jpeg|gif|ico|woff2?|css|js|xml|txt)$/.test(pathname);
    if (!isApi && !isNextInternal && !isStatic) {
      const redirectUrl = new URL(pathname + url.search, `https://${CANONICAL_HOST}`);
      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  // Set language cookie for locale routes
  const response = NextResponse.next();
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    response.cookies.set("preferred_lang", "zh", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  } else if (pathname === "/") {
    response.cookies.set("preferred_lang", "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
