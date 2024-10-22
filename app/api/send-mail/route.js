const nodemailer = require('nodemailer');
require('dotenv').config();

export async function POST(req) {
    const body = await req.json();
    const {firstName, email} = body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: 'false',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    const mail = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Welcome to P-fi.',
        text: `Hi ${firstName},\nThank you for joining P-fi! We're excited to have you as part of our growing community of lenders dedicated to helping borrowers achieve their financial goals.\n\nWe have received your request to join, and our team is currently reviewing your application. Please allow us a short period to complete this process. You will receive a confirmation email once your account is fully set up and ready to go.\n\nWe look forward to seeing you on the platform!\n\nBest regards,\n\nThe P-fi Team\npfilending@gmail.com\n+91 79867 85651
        `
    };

    try {
        await transporter.sendMail(mail);
        return new Response(
            JSON.stringify({message: "Email sent!"}),
            {status: 200}
        );
    } catch(e) {
        return new Response(
            JSON.stringify({message: `Error encountered: ${e}`}),
            {status: 400}
        );
    }
} 