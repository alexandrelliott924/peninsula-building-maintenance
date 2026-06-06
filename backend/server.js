const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');

dotenv.config();

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate all fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Email to admin
    const adminMsg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.EMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Confirmation email to user
    const userMsg = {
      to: email,
      from: process.env.EMAIL_USER,
      subject: 'Thank you for contacting PBM',
      html: `
        <h2>Thank you for contacting Peninsula Building Maintenance</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you soon.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Peninsula Building Maintenance Team</p>
      `
    };

    // Send both emails
    await sgMail.send(adminMsg);
    await sgMail.send(userMsg);

    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});