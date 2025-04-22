import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body); // 🪵 log for debugging

    const { firstName, lastName, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO || "brighthmwale0000@gmail.com",
      replyTo: email, // This sets the reply-to email to the one who filled the form
      subject: `Contact Form: ${subject} - ${process.env.WEBSITE_NAME || "DMT Acres"}`, // Include the webname in the subject
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in API route:", err); // 👈 catch the exact error
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
