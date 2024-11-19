import NextAuth, { RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/app/api/lib/prisma";
import bcrypt from "bcrypt";
import { User } from "../../interfaces/user.interface";
import { users } from "@prisma/client";
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "****",
        },
      },
      async authorize(credentials){
        if (!credentials) return null;
        const userFound = await db.users.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!userFound)  throw new Error("Usuario no encontrado");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) throw new Error("Las credenciales son incorrectas");


        return {
            id: userFound.id, // Convertir el ID a string
            username: userFound.username,
          } as User;

      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
