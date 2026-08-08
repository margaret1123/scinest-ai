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

  // Redirect legacy /en/* URLs to their canonical English paths
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const target = pathname === "/en" ? "/" : pathname.slice(3) || "/";
    return NextResponse.redirect(new URL(target + url.search, url), 301);
  }

  // Determine locale and set html lang via request header
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-html-lang", isZh ? "zh-CN" : "en");

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set language cookie for locale routes
  response.cookies.set("preferred_lang", isZh ? "zh" : "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
