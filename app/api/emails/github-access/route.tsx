import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import EmailGithubAccess from "@/components/emails/github-access";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { github_email, payment_email, project_name } = body;

    if (!github_email || !payment_email || !project_name) {
      return NextResponse.json({ error: "Fill in all fields" }, { status: 400 });
    }

    const html = await render(
      <EmailGithubAccess
        github_email={github_email}
        payment_email={payment_email}
        project_name={project_name}
      />,
      {
        pretty: true // HTML'i okunabilir hale getirme
      }
    );

    const data = await resend.emails.send({
      from: "Shadcn UI Kit Github <contact@shadcnuikit.com>",
      to: "ugurozgen5220@gmail.com",
      subject: "Github Erisim Talebi",
      html
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
