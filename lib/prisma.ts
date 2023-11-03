import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

let prisma:
  | PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  | undefined;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!prisma) {
    prisma = new PrismaClient();
  }
}

export default prisma;
