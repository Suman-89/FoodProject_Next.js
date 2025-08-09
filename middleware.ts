import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export function middleware(request: any) {
  const token = request.cookies.get("token");
  console.log(token, "dsfghj");
  if (!token) {
    console.log("Redirecting to /auth/login");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log("Token found, proceeding to next response");

  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/list","/cms/update/:slug","/cms/create","/auth/profile","/auth/update","/cms/cart"],
};