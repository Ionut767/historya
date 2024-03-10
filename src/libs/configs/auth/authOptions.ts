import clientPromise from "@/libs/mongodb";
import Google from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Adapter } from "next-auth/adapters";
declare module "next-auth" {
  interface Session {
    role?: string;
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? "user",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
  },
  debug: process.env.NODE_ENV === "development",
  useSecureCookies: true, // Set to true if using HTTPS
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as any;
      session.role = token.role as any;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.role = user.role;
      }
      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise) as Adapter,
};
