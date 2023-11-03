"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

type Params = {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
};

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: Params): Promise<void> {
  try {
    await prisma?.user.upsert({
      where: {
        id: userId,
      },
      update: {
        username,
        name,
        bio,
        image,
      },
      create: {
        id: userId,
        username,
        name,
        bio,
        image,
      },
    });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    return await prisma?.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        lists: true,
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
