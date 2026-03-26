"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // Use environment variables for security
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
    return { success: false, error: "Server configuration error." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Urban Saajh Leads" <${GMAIL_USER}>`,
    to: GMAIL_USER, // Lead will be sent to the owner's Gmail
    replyTo: email,
    subject: `New Project enquiry from ${name}`,
    text: `
      --- New Project Enquiry ---
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `,
    html: `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #634d3d; font-family: serif; border-bottom: 2px solid #634d3d; padding-bottom: 10px;">New Project Enquiry</h2>
        <p style="margin-bottom: 5px;"><strong>Client Name:</strong> ${name}</p>
        <p style="margin-bottom: 5px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #634d3d;">${email}</a></p>
        <p style="margin-bottom: 20px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
        
        <div style="background: #fcfbf9; padding: 15px; border-left: 4px solid #634d3d;">
          <p style="font-weight: bold; margin-top: 0; color: #634d3d;">Project Details / Message:</p>
          <p style="white-space: pre-line; margin-bottom: 0;">${message}</p>
        </div>
        
        <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center;">
          Sent from Urban Saajh Website Contact Form
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email delivery error:", error);
    return { success: false, error: "Delivery failed. Please try again later." };
  }
}
