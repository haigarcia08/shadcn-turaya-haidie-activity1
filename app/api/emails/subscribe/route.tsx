import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailSubscribeForm from "@/components/emails/subscribe-form";
import { render } from "@react-email/render";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const html = await render(<EmailSubscribeForm />, {
      pretty: true // HTML'i okunabilir hale getirme
    });

    const data = await resend.emails.send({
      from: "Shadcn UI Kit <contact@shadcnuikit.com>",
      to: email,
      subject: "You have subscribed to the newsletter!",
      html
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
