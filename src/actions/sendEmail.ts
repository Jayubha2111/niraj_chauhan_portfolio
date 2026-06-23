"use server";

import nodemailer from "nodemailer";

const siteName = "Niraj Chauhan | Data Engineer";
const accent = "#06b6d4";
const gradient = "linear-gradient(135deg, #06b6d4, #8b5cf6, #14b8a6)";
const darkBg = "#020617";
const darkCard = "#0f172a";
const darkBorder = "#1e293b";
const textMuted = "#94a3b8";

function container(content: string) {
  return `
    <div style="font-family:'Segoe UI',system-ui,sans-serif;background:${darkBg};padding:40px 20px">
      <table align="center" width="100%" style="max-width:560px;margin:0 auto">
        <tr>
          <td style="background:${gradient};padding:30px 40px;border-radius:16px 16px 0 0;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700">${siteName}</h1>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px">Portfolio Contact</p>
          </td>
        </tr>
        <tr>
          <td style="background:${darkCard};padding:32px 40px;border-left:1px solid ${darkBorder};border-right:1px solid ${darkBorder}">
            ${content}
          </td>
        </tr>
        <tr>
          <td style="background:${darkBg};padding:20px 40px;border:1px solid ${darkBorder};border-radius:0 0 16px 16px;text-align:center">
            <p style="color:${textMuted};font-size:12px;margin:0">
              &copy; ${new Date().getFullYear()} ${siteName} &mdash; Built with Next.js & Tailwind
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function badge(text: string) {
  return `<span style="display:inline-block;background:rgba(6,182,212,0.1);color:${accent};padding:3px 12px;border-radius:6px;font-size:12px;font-weight:500">${text}</span>`;
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0">
        <p style="color:${textMuted};font-size:12px;margin:0 0 2px;text-transform:uppercase;letter-spacing:0.5px">${label}</p>
        <p style="color:#fff;font-size:15px;margin:0;font-weight:500">${value}</p>
      </td>
    </tr>
    <tr><td style="border-bottom:1px solid ${darkBorder};height:1px"></td></tr>
  `;
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = formData;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.log("Demo mode - contact form:", { name, email, subject, message });
    return { success: true, message: "Message received (demo mode - configure SMTP in .env.local to send real emails)" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // ---- 1. Notification to Niraj ----
    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Message from ${name}${subject ? ` — ${subject}` : ""}`,
      html: container(`
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
          <div style="width:44px;height:44px;border-radius:12px;background:${gradient};display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;font-weight:700">${name.charAt(0).toUpperCase()}</div>
          <div>
            <h2 style="color:#fff;margin:0;font-size:18px">New Contact Message</h2>
            <p style="color:${textMuted};margin:2px 0 0;font-size:13px">${badge("Portfolio Website")}</p>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${fieldRow("Name", name)}
          ${fieldRow("Email", `<a href="mailto:${email}" style="color:${accent};text-decoration:none">${email}</a>`)}
          ${fieldRow("Subject", subject || "Not provided")}
        </table>
        <div style="margin-top:20px">
          <p style="color:${textMuted};font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.5px">Message</p>
          <div style="background:rgba(255,255,255,0.03);border:1px solid ${darkBorder};border-radius:12px;padding:16px;line-height:1.7;color:#e2e8f0;font-size:14px">${message.replace(/\n/g, "<br>")}</div>
        </div>
      `),
    });

    // ---- 2. Thank-you auto-reply to sender ----
    await transporter.sendMail({
      from: `"${siteName}" <${smtpUser}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}! 🎉`,
      html: container(`
        <div style="text-align:center;margin-bottom:24px">
          <div style="width:64px;height:64px;border-radius:16px;background:${gradient};display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px">✉️</div>
          <h2 style="color:#fff;margin:0;font-size:22px">Thank You, ${name}!</h2>
        </div>
        <p style="color:#e2e8f0;font-size:15px;line-height:1.7;margin:0 0 16px">
          I&apos;ve received your message and will get back to you as soon as possible — usually within <strong style="color:${accent}">24–48 hours</strong>.
        </p>

        <div style="background:rgba(255,255,255,0.03);border:1px solid ${darkBorder};border-radius:12px;padding:20px;margin:20px 0">
          <p style="color:${textMuted};font-size:12px;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.5px">Your Message Summary</p>
          <p style="color:${textMuted};font-size:13px;margin:0 0 4px"><strong style="color:#fff">Subject:</strong> ${subject || "Not provided"}</p>
          <p style="color:${textMuted};font-size:13px;margin:0"><strong style="color:#fff">Message:</strong></p>
          <p style="color:#e2e8f0;font-size:14px;line-height:1.6;margin:6px 0 0;background:rgba(0,0,0,0.2);padding:12px;border-radius:8px">${message.replace(/\n/g, "<br>")}</p>
        </div>

        <p style="color:${textMuted};font-size:14px;line-height:1.6;margin:0 0 8px">
          In the meantime, feel free to connect with me on 
          <a href="https://www.linkedin.com/in/niraj-chauhan-4b91142a8?" style="color:${accent};text-decoration:none;font-weight:500">LinkedIn</a> 
          or check out my work on 
          <a href="https://github.com/Niraj1321" style="color:${accent};text-decoration:none;font-weight:500">GitHub</a>.
        </p>

        <hr style="border:none;border-top:1px solid ${darkBorder};margin:24px 0">

        <p style="color:${textMuted};font-size:13px;margin:0;text-align:center">
          Best regards,<br>
          <strong style="color:#fff">Niraj Chauhan</strong><br>
          <span style="color:${accent}">Data Engineer</span>
        </p>
      `),
    });

    return { success: true, message: "Message sent successfully! Check your inbox for a confirmation." };
  } catch (error) {
    console.error("Contact form error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
