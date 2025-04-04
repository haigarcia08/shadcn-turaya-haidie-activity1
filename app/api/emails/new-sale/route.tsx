import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import NewSaleEmail from "@/components/emails/new-sale";
import NewSaleCustomerEmail from "@/components/emails/new-sale-customer";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const html = await render(<NewSaleEmail data={body} />, {
      pretty: true // HTML'i okunabilir hale getirme
    });
    const htmlCustomer = await render(<NewSaleCustomerEmail data={body} />, {
      pretty: true // HTML'i okunabilir hale getirme
    });

    // benim icin
    const data = await resend.emails.send({
      from: `Paddle New Sale ${process.env.NODE_ENV === "development" ? "(Test)" : ""} <contact@shadcnuikit.com>`,
      to: "ugurozgen5220@gmail.com",
      subject: "You made a sale!",
      html
    });

    // musteri icin
    if (body.customerEmail) {
      const data2 = await resend.emails.send({
        from: `Shadcn UI Kit ${process.env.NODE_ENV === "development" ? "(Test)" : ""} <sale@shadcnuikit.com>`,
        to: body.customerEmail,
        subject: "Your payment is completed.",
        html: htmlCustomer
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
