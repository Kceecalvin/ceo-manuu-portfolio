import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    // Using the previously configured Resend key
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Manuu Spaces <hello@cal-dev.me>',
      to: ['cal-dev@zohomail.com'],
      subject: `[Portfolio] ${subject || 'New Connection'} from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nVision Brief:\n${message}`,
      html: `
        <div style="font-family: sans-serif; background: #050510; color: white; padding: 40px; border-radius: 20px;">
          <h2 style="color: #0044FF; text-transform: uppercase; letter-spacing: 2px;">New Strategic Connection</h2>
          <p style="color: #A0A0B0;">A new inquiry has been received via the Manuu Spaces Portfolio.</p>
          <hr style="border: 0.5px solid #222; margin: 30px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Channel:</strong> ${email}</p>
          <p><strong>Inquiry Vector:</strong> ${subject}</p>
          <p><strong>The Brief:</strong></p>
          <p style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; color: #eee;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ message: 'Failed to send brief', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Brief sent successfully', data }, { status: 200 });
  } catch (error: any) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ 
      message: 'Network Error',
      error: error.message 
    }, { status: 500 });
  }
}
