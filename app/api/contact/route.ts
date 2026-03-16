import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this if using another provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const timestamp = new Date().toLocaleString();
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address (your email)
            to: process.env.EMAIL_USER,   // Send to yourself
            replyTo: email,               // If you hit reply, it goes to the user
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nTimestamp: ${timestamp}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
