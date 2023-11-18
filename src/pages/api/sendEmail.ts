import { type NextApiRequest, type NextApiResponse } from "next";
import nodemailer, { type Transporter } from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

type MailData = {
  name: string;
  email: string;
  message: string;
};

const createTransporter = (): Transporter => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME || "",
      pass: process.env.EMAIL_PASSWORD || "", 
    }
  });
};

const sendEmail = async (mailData: MailData) => {
  const { name, email, message } = mailData;
  const transporter = createTransporter();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME || "",
      to: process.env.EMAIL_USERNAME || "",
      subject: `New Message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Error sending email");
  }
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  try {
    const result = await sendEmail({ name, email, message });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}