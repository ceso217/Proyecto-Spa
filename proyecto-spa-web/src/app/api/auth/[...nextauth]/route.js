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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        await connectDB();
        console.log(credentials);

        const userFound = await User.findOne({
          username: credentials?.username,
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
