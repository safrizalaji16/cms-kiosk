import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { cookieName } from "./constants/api/config";

export default async function middleware(req: NextRequest) {
  const { url } = req;

  const res = NextResponse.next();

  if (url.includes("/dashboard" || "/layouts" || "/contents")) {
    const userCookie = req.cookies.get(cookieName)?.value;

    if (!userCookie) {
      const redirectUrl = req.nextUrl.clone();

      redirectUrl.pathname = "/auth/login";
      return NextResponse.redirect(redirectUrl, { status: 307 });
    }

    const now = new Date();
    const expiryTimestamp = now.getTime() + 1800 * 1000;
    const futureDate = now.setTime(expiryTimestamp);

    res.cookies.set(cookieName, userCookie, {
      httpOnly: true,
      path: "/",
      sameSite: "none",
      secure: true,
      expires: futureDate,
    });

    return res;
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)"],
};