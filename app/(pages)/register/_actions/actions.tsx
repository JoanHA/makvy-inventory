"use server";

import { signupShema } from "@/app/_lib/definitions";
import bcrypt from "bcrypt";
import db from "@/app/api/lib/prisma";
import { createSession } from "@/app/_lib/session";
import { redirect } from 'next/navigation'
export async function  signUp  (
	state: unknown,
	formData: { get: (arg0: string) => unknown }
)  {
	const validationResult = signupShema.safeParse({
		username: formData.get("username"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	});
	if (!validationResult.success) {
		return {
			status: 400,
			errors: validationResult.error.flatten().fieldErrors,
		};
	}
	const { username, password } = validationResult.data;

	const hashPassword = await bcrypt.hash(password, 10);
	let role = "11";
	//Verfify is there is already a admin user
	const existAdmin = await db.users.findFirst({
		where: {
			role: "10",
		},
	});
	if (!existAdmin) {
		role = "10";
	}
	const userFound = await db.users.findUnique({
		where: {
			username: username,
		},
	});
	if (userFound) {
		return {
			status: 409,
			msg: "El usuario ya esta en uso... ",
		};
	}

	const user = await db.users.create({
		data: {
			username: username,
			role,
			password: hashPassword,
			status: 1,
		},
	});

	const cookieName =  	await createSession(user.id);
	return {
		status: 200,
		user:user,
        msg: "Usuario creado correctamente",
        cookieName: cookieName,
	}
};

