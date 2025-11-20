import React, { useState, useEffect } from 'react';
import { X, Mail, User, Phone, MessageCircle } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add subtle scale animation when opening
      document.documentElement.style.setProperty('--modal-scale', '0.95');
      setTimeout(() => {
        document.documentElement.style.setProperty('--modal-scale', '1');
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FormSubmit.co will handle the email sending
      const form = e.target;
      form.submit();
      
      // Reset form and close modal after successful submission
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => {
        onClose();
        alert('Thank you! We will contact you soon.');
      }, 500);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Enhanced Backdrop with animation */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Enhanced Modal with better spacing and animations */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[98vh] overflow-y-auto transform transition-all duration-300 scale-[var(--modal-scale,1)]">
        {/* Enhanced Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content with improved spacing */}
        <div className="p-4">
          {/* Enhanced Header */}
          <div className="text-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-2 shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-0.5 tracking-tight">
              Start Your Project
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              Share your vision and we'll bring it to life together
            </p>
          </div>

          {/* Form with FormSubmit.co integration */}
          <form 
            action="https://formsubmit.co/mohdsuhel.dev@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            {/* Hidden fields for FormSubmit.co */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Project Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
<div className='grid grid-cols-2 gap-2'>
            {/* Name Field */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-800">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-200 bg-white hover:border-gray-400"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-800">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-200 bg-white hover:border-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
</div>
<div className='grid grid-cols-2 gap-2'>
            {/* Phone Field */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-800">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-200 bg-white hover:border-gray-400"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Service Field */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-800">
                Service Interested In *
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-200 bg-white hover:border-gray-400 appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="consultation">Consultation</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
</div>
            {/* Message Field */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-800">
                Project Details
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  className="w-full pl-12 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-200 bg-white hover:border-gray-400 resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-md font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Start Your Project'
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-center text-xs text-gray-500 pt-2">
              We respect your privacy. Your information is secure with us.
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        :root {
          --modal-scale: 1;
        }
      `}</style>
    </div>
  );
};

export default Modal;