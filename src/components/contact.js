import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Content from './content';
import '../styles/contact.css';
import icon from '../assets/logos/PBM-icon.png';

function Contact() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Pre-fill subject if passed from another page
    useEffect(() => {
        if (location.state?.subject) {
            setFormData((prev) => ({
                ...prev,
                subject: location.state.subject
            }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.subject) {
            newErrors.subject = 'Please select a subject';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Form is valid - show success message
        setSubmitted(true);

        // Redirect to home after 5 seconds
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    if (submitted) {
        return (
            <div className="contact-success-page">
                <div className="success-message-container">
                    <h1 className="success-title">Message sent successfully, thank you!</h1>
                    <img className='contact-page-pbm-logo' src={icon} alt="PBM icon" />
                    <p className="success-subtitle">Redirecting to home page...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <Content title="Contact us">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            placeholder="Your name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="your@email.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`form-input ${errors.phone ? 'input-error' : ''}`}
                            placeholder="Your phone number"
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`form-select ${errors.subject ? 'input-error' : ''}`}
                        >
                            <option value="">Select a subject</option>
                            <option value="Get a quote">Get a quote</option>
                            <option value="Skilled maintenance application">Skilled maintenance application</option>
                            <option value="Trade assistant application">Trade assistant application</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                            placeholder="Your message"
                            rows="6"
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </Content>
        </div>
    );
}

export default Contact;