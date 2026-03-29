const TELEGRAM_BOT_TOKEN = "8701939137:AAHjUbPY27Hh4ogdu_44TyEusMguCIrnsf0";
const TELEGRAM_CHAT_ID = "5042150597";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Format Telegram message
    const text = [
      `📩 <b>New Portfolio Message</b>`,
      ``,
      `<b>From:</b> ${escapeHtml(name)}`,
      `<b>Email:</b> ${escapeHtml(email)}`,
      `<b>Subject:</b> ${escapeHtml(subject || "No subject")}`,
      ``,
      `<b>Message:</b>`,
      escapeHtml(message),
    ].join("\n");

    // Send to Telegram
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      return Response.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
