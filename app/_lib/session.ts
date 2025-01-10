import "server-only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
	name: "session",
	options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
	duration: 24 * 60 * 60 * 1000,
};

interface payloadInterface {
	UserId: string;
	expires: Date;
}
export async function encrypt(payload: JWTPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1day")
		.sign(key);
}

export async function decrypt(session) {
	try {
		const { payload } = await jwtVerify(session, key, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function createSession(UserId: number) {
	const expires = new Date(Date.now() + cookie.duration);
	const session = await encrypt({ UserId, expires });

	cookies().set(cookie.name, session, { ...cookie.options, expires });
	redirect("/");
}
export async function verifySession(redirecting = true) {
	const Cookies = cookies().get(cookie.name)?.value;
	const session = await decrypt(Cookies);

	if (!session?.UserId) {
		if (redirecting) {
			redirect("/login");
		}
		return null
	}
	return { userId: session.UserId };
}

export async function deleteSession() {
	cookies().delete(cookie.name);
	redirect("/login");
}
