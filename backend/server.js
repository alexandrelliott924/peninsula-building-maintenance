const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to send email via Brevo API
function sendBrevoEmail(emailData) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(emailData);

    const options = {
      hostname: 'api.brevo.com',
      path: '/v3/smtp/email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length,
        'api-key': process.env.BREVO_API_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Brevo API error: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 /api/contact endpoint called');
    console.log('Request body:', { name: req.body.name, email: req.body.email, phone: req.body.phone, subject: req.body.subject });

    const { name, email, phone, subject, message } = req.body;

    // Validate all fields
    if (!name || !email || !phone || !subject || !message) {
      console.log('❌ Validation failed - missing fields');
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Email to admin
    const adminMsg = {
      to: [{ email: process.env.ADMIN_EMAIL }],
      from: { email: process.env.EMAIL_USER },
      subject: `New Contact Form: ${subject}`,
      htmlContent: `
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
      to: [{ email: email }],
      from: { email: process.env.EMAIL_USER },
      subject: 'Thank you for contacting PBM',
      htmlContent: `
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
    console.log('📤 Attempting to send emails via Brevo...');
    console.log('Admin email recipient:', process.env.ADMIN_EMAIL);
    console.log('User email recipient:', email);

    await sendBrevoEmail(adminMsg);
    console.log('✅ Admin email sent successfully');

    await sendBrevoEmail(userMsg);
    console.log('✅ User confirmation email sent successfully');

    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('❌ Email error caught:', error.message);
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
  console.log(`📧 Brevo API Key configured: ${process.env.BREVO_API_KEY ? '✅ Yes' : '❌ No'}`);
  console.log(`📬 Admin email: ${process.env.ADMIN_EMAIL}`);
});