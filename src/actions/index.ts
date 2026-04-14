import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { getSecret } from "astro:env/server";

export const server = {
	basicForm: defineAction({
		accept: "form",
		input: z.object({
			name: z.string().min(2),
			email: z.email(),
			message: z.string().min(10),
		}),
		handler: async (input) => {
			const webhookUrl = getSecret("DISCORD_WEBHOOK_URL");

			if (!webhookUrl) {
				throw new ActionError({
					code: "NOT_FOUND",
					message: "Discord webhook URL is undefined!",
				});
			}

			const response = await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					content: `**Name:** ${input.name}\n**E-mail:** ${input.email}\n**Message:** ${input.message}`,
				}),
			});

			if (!response.ok) {
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Failed to send to Discord!",
				});
			}

			return { success: true };
		},
	}),
};
