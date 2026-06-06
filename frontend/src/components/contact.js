import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SuccessPageContext } from '../SuccessPageContext';
import Content from './content';
import '../styles/contact.css';
import icon from '../assets/logos/PBM-icon.png';

function Contact() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setShowSuccessPage } = useContext(SuccessPageContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        //Start loading
        setIsLoading(true);

        try {
            //Send data to backend
            const response = await fetch('http://https://peninsula-building-maintenance.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(data.success) {
                //Form is valid, email sent
                setSubmitted(true);
                setShowSuccessPage(true);

                //Redirect to home after 5 seconds
                setTimeout(() => {
                    setShowSuccessPage(false);
                    navigate('/');
                }, 5000);
            } else {
                //Server returns error
                setErrors({
                    submit: data.error || 'Failed to send message. Please try again.'
                });
                setIsLoading(false);
            }
            
            
        } catch(error) {
                //Network or other error
                setErrors({
                    submit: 'Failed to send message. Please check your connection and try again.'
                });
                setIsLoading(false);
                console.error('Error: ', error);
            }
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
                    {errors.submit && (
                        <div style={{ color: '#d9534f', marginBottom: '1em', textAlign: 'center' }}>
                            {errors.submit}
                        </div>
                    )}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit" className="form-button" disabled={isLoading}>
                        {isLoading? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </Content>
        </div>
    );
}

export default Contact;