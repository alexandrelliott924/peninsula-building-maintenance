const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const SibApiV3Sdk = require('sib-api-v3-sdk');

dotenv.config();

// Configure Brevo SDK
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('/api/contact endpoint called');
    console.log('Request body:', { name: req.body.name, email: req.body.email, phone: req.body.phone, subject: req.body.subject });

    const { name, email, phone, subject, message } = req.body;

    // Validate all fields
    if (!name || !email || !phone || !subject || !message) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Email signature with logo and company details
    const emailSignature = `
      <div style="margin-top: 20px; margin-bottom: 5px;">
        <img src="https://github.com/alexandrelliott924/peninsula-building-maintenance/blob/dev/frontend/src/assets/logos/PBM-logo-white-background.jpeg?raw=true" alt="Peninsula Building Maintenance" style="width: 50%; height: auto; max-width: 220px;">
      </div>
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #999; line-height: 1.6;">
        <p style="margin: 0 0 2px 0; font-weight: normal; color: #999; font-size: 12px;">Peninsula Building Maintenance Pty Ltd</p>
        <p style="margin: 0 0 2px 0; font-size: 12px;">80 Radley Drive, Baynton, WA6714</p>
        <p style="margin: 0 0 2px 0; font-size: 12px;">p. 0401 443 548</p>
        <p style="margin: 0 0 2px 0; font-size: 12px;">e. <a href="mailto:admin@peninsula-bm.com.au" style="color: #d4af37; text-decoration: underline; font-weight: normal;">admin@peninsula-bm.com.au</a></p>
        <p style="margin: 0 0 2px 0; font-size: 12px;">a.c.n 672 593 252</p>
        <p style="margin: 0; font-size: 12px;">a.b.n 526 725 932 52</p>
      </div>
    `;

    // Create Brevo SDK email object for admin
    const adminMsg = new SibApiV3Sdk.SendSmtpEmail();
    adminMsg.to = [{ email: process.env.ADMIN_EMAIL }];
    adminMsg.sender = { email: process.env.EMAIL_USER, name: 'Peninsula Building Maintenance' };
    adminMsg.subject = `New Contact Form: ${subject}`;
    adminMsg.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ${emailSignature}
    `;

    // Create Brevo SDK email object for user
    const userMsg = new SibApiV3Sdk.SendSmtpEmail();
    userMsg.to = [{ email: email }];
    userMsg.sender = { email: process.env.EMAIL_USER, name: 'Peninsula Building Maintenance' };
    userMsg.subject = 'Thank you for contacting PBM';
    userMsg.htmlContent = `
      <p>Hi ${name},</p>
      <p>We received your message and will get back to you soon.</p>
      <p><strong>Your message details:</strong></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p>Best regards,</p>
      ${emailSignature}
    `;

    // Send both emails
    console.log('Attempting to send emails via Brevo SDK...');
    console.log('Admin email recipient:', process.env.ADMIN_EMAIL);
    console.log('User email recipient:', email);

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail(adminMsg);
    console.log('Admin email sent successfully');

    await apiInstance.sendTransacEmail(userMsg);
    console.log('User confirmation email sent successfully');

    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email error caught:', error.message);
    console.error('Error details:', error);
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
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📧 Brevo SDK configured: ${process.env.BREVO_API_KEY ? 'Yes' : 'No'}`);
  console.log(`📬 Admin email: ${process.env.ADMIN_EMAIL}`);
});