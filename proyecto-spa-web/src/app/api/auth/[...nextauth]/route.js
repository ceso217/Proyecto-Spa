import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        identifier: {
          label: "Usuario o Correo",
          type: "text",
          placeholder: "jsmith o jsmith@example.com",
        }, // Cambiamos a 'identifier'
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();
        console.log(credentials);

        // Busca al usuario por nombre de usuario o correo
        const userFound = await User.findOne({
          $or: [
            { username: credentials?.identifier }, // Busca por nombre de usuario
            { email: credentials?.identifier }, // Busca por correo
          ],
        }).select("+password");

        if (!userFound) throw new Error("Credenciales inválidas");
        console.log(userFound);

        const passwordMatch = await bcrypt.compare(
          credentials?.password,
          userFound.password
        );
        if (!passwordMatch) throw new Error("Credenciales inválidas");

        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
