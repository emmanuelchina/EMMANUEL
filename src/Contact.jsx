// ContactForm.jsx
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // React Icons

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const json = await response.json();
      
      if (json.success) {
        setSubmitStatus('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Contact Form Section - SAME AS BEFORE */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Get In Touch
          </h2>
          
          {submitStatus && (
            <div className={`p-4 rounded-xl mb-6 text-center font-medium ${
              submitStatus.includes('successfully') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </section>

        {/* Quick Contact Section - UPDATED WITH REACT ICONS */}
        <section className="">
          <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
          <p className="text-lg mb-8 opacity-90">Prefer direct chat? Reach me instantly:</p>
          
          <div className="flex justify-center space-x-8">
            {/* WhatsApp - React Icon */}
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3  rounded-2xl hover:bg-opacity-30 transition-all duration-200 hover:scale-110 hover:-translate-y-2"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-10 h-10 text-green-400 group-hover:text-green-300" />
            </a>

            {/* Gmail - React Icon */}
            <a 
              href="mailto:YOUR_EMAIL@gmail.com" 
              className="group p-3 rounded-2xl hover:bg-opacity-30 transition-all duration-200 hover:scale-110 hover:-translate-y-2"
              aria-label="Email"
            >
              <FaEnvelope className="w-10 h-10 text-red group-hover:text-red-300 bg-red-300" />
            </a>

            {/* LinkedIn - React Icon */}
            <a 
              href="https://linkedin.com/in/YOUR_PROFILE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3   rounded-2xl hover:bg-opacity-30 transition-all duration-200 hover:scale-110 hover:-translate-y-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-10 h-10 text-white group-hover:text-blue-200" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
