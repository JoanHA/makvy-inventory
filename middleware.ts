import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/app/_lib/session";

export  async function middleware(req: NextRequest) {
	//1. check if route is protected
	const protectedRoutes = ["/admin/profile"];
	const currentPath = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(currentPath);

	if (isProtectedRoute) {
		//2. check for valid session
		const cookie = cookies().get("session")?.value;
		const session = await decrypt(cookie);

		if (!session?.userId) {
			//3. redirect to login page
			return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
		}

		return NextResponse.next();
	}
}

export const config = {
	matcher: ["/admin/:path*"], // Se aplica a todas las rutas bajo /admin/
  }