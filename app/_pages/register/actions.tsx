"user server";

import { signupShema } from "@/app/_lib/definitions";
import bcrypt from "bcrypt";
import db from "@/app/api/lib/prisma";
import { createSession } from "@/app/_lib/session";
export const signUp = async (state, formData) => {
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
			msg: "El usuario ya existe ",
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

    await createSession(user.id)


};
