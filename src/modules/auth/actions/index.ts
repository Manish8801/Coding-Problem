"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onBoardUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return { success: false, message: "No user found" };
    }

    const { id: clerkId, firstName, lastName, imageUrl, emailAddresses } = user;

    const newUser = db.user.upsert({
      where: { clerkId },
      update: {
        imageUrl,
        email: emailAddresses[0]?.emailAddress || "",
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || "Anonymous",
      },
      create: {
        clerkId,
        imageUrl,
        email: emailAddresses[0]?.emailAddress || "",
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || "Anonymous",
      },
    });

    return {
      success: true,
      user: await newUser,
      message: "User onboarded successfully",
    };
  } catch (error) {
    console.error("Error onboarding user:", error);
    return { success: false, message: "Error onboarding user" };
  }
};
