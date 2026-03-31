// apps/web/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthPage = pathname === "/login" || pathname === "/register";
  const isDashboard = pathname.startsWith("/dashboard");

  if (token && (pathname === "/login" || pathname === "/register")) {
  return NextResponse.redirect(new URL("/dashboard", request.url));
}

  // Logged-in user trying to access login or register → redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Not logged-in user trying to access dashboard → redirect to login
  if (!token && isDashboard) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};