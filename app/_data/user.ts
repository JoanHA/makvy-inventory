import { cache } from "react";
import { verifySession } from "../_lib/session";
import db from "@/app/api/lib/prisma";
import { userDTO } from "./dto/DTO";

export const getUser = cache(async () => {
	const session = await verifySession();

	const data = await db.users.findMany({
		where: {
			id: session.userId,
		},
	});

	const user = userDTO(data[0]);

	return user;
});
