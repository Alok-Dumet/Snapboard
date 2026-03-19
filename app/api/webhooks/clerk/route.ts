import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    switch (evt.type) {
      case "user.created": {
        const { id, email_addresses, username } = evt.data;

        const primaryEmail =
          email_addresses.find((email) => email.id === evt.data.primary_email_address_id)
            ?.email_address ??
          email_addresses[0]?.email_address ??
          null;

        await prisma.user.upsert({
          where: {
            clerkUserId: id,
          },
          update: {
            email: primaryEmail,
            username: username ?? null,
          },
          create: {
            clerkUserId: id,
            email: primaryEmail,
            username: username ?? null,
          },
        });

        console.log(`Created/synced user ${id}`);
        break;
      }

      default: {
        console.log(`Unhandled webhook event type: ${evt.type}`);
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return new Response("Error processing webhook", { status: 400 });
  }
}