import type { APIContext } from "astro";

export const prerender = false;

export async function POST({ request }: APIContext) {
  const data = await request.json();
  const { name, email, message } = data;
  const token = data["cf-turnstile-response"];

  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: import.meta.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );

  console.log(turnstileResponse.status);
  console.log(turnstileResponse);

  if (!turnstileResponse.ok) {
    return new Response(
      JSON.stringify({
        error: "Verification request failed",
      }),
      { status: 500 },
    );
  }

  const turnstileData = await turnstileResponse.json();

  if (!turnstileData.success) {
    return new Response(
      JSON.stringify({
        error: "Verification failed",
      }),
      { status: 400 },
    );
  }

  const webhookUrl = import.meta.env.DISCORD_WEBHOOK_URL;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `**Name:** ${name}\n**E-mail:** ${email}\n**Message:** ${message}`,
    }),
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({
        error:
          "Something went wrong when sending message to the Discord Webhook!",
      }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
