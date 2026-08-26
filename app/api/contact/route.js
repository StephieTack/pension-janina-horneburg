import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Pension Janina <kontakt@pension-janina-horneburg.de>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: "Anfrage Kontaktformular - Pension Janina",
      html: `
        <h2>Anfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log("RESEND DATA:", data);
    console.log("RESEND ERROR:", error);

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("RESEND EXCEPTION:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}