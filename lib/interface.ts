import NextAuth from "next-auth";
export interface RoutesA {
  href: string;
  label: string;
  active: boolean;
  hide?: boolean;
}
export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  password: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
