import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
  Globe,
  Award,
  Users,
  Target,
  Zap,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Mobile App Development", href: "/services/app-development" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Content Strategy", href: "/services" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/contact" },
    { name: "Portfolio", href: "/project" },
    { name: "Case Studies", href: "/project" },
    { name: "Blog", href: "/" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#twitter", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#linkedin", color: "hover:text-blue-700" },
    { icon: Youtube, href: "#youtube", color: "hover:text-red-600" }
  ];

  const stats = [
    { icon: Award, number: "20+", label: "Projects Completed" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Target, number: "98%", label: "Success Rate" },
    { icon: Zap, number: "24/7", label: "Support Available" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgb(249 250 251)"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid lg:grid-cols-4 gap-4">
            {/* Company Info */}
            <div className="space-y-8">
              {/* Logo & Description */}
              <div>
                <div className="flex items-center mb-6">
                  <Link to="/" className="flex items-center space-x-2 group">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className='h-18 object-contain p-1'
                    />
                  </Link>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Transform your digital presence with innovative web development, SEO, and digital marketing solutions.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Get in Touch</h4>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      1st Floor, Rolex Tower, D2/119, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href="tel:+918318159403" className="text-gray-300 hover:text-orange-400 transition-colors">
                    +91 8318159403
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:info@codeclicks.in" className="text-gray-300 hover:text-orange-400 transition-colors">
                    info@codeclicks.in
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>
                © 2025 <span className="text-orange-400 font-medium">CodeClicks</span>. All Rights Reserved.
                <span className="text-gray-500"> | Design by CodeClicks Team</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm hidden lg:block">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <a href="#terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms
              </a>
              <a href="#sitemap" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                Sitemap <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-orange-500/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;