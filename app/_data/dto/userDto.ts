import { users } from "@prisma/client";

export function userDTO(user: users) {
    return{
        id: user.id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }

}