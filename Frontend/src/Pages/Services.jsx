import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Code,
    Smartphone,
    TrendingUp,
    Search,
    Palette,
    ShoppingCart,
    ArrowRight,
    CheckCircle,
    Zap,
    Target,
    Award
} from 'lucide-react';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    const services = [
        {
            id: 'web-development',
            title: 'Web Development',
            icon: Code,
            description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
            features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable']
        },
        {
            id: 'app-development',
            title: 'Mobile App Development',
            icon: Smartphone,
            description: 'Native and cross-platform mobile applications designed for seamless user experiences on iOS and Android.',
            features: ['Native Performance', 'Cross-Platform', 'User-Friendly UI', 'App Store Ready']
        },
        {
            id: 'digital-marketing',
            title: 'Digital Marketing',
            icon: TrendingUp,
            description: 'Data-driven digital marketing strategies to grow your brand visibility and drive conversions.',
            features: ['Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'Analytics & Reporting']
        },
        {
            id: 'seo',
            title: 'SEO Optimization',
            icon: Search,
            description: 'Strategic SEO services to improve your search engine rankings and attract organic traffic.',
            features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO']
        },
        {
            id: 'graphic-design',
            title: 'Graphic Design',
            icon: Palette,
            description: 'Creative visual identity and branding solutions that communicate your message effectively.',
            features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design']
        },
        {
            id: 'ecommerce',
            title: 'E-commerce Solutions',
            icon: ShoppingCart,
            description: 'Robust e-commerce platforms designed to streamline sales and enhance customer shopping experiences.',
            features: ['Shopping Cart', 'Payment Integration', 'Inventory Management', 'Order Tracking']
        }
    ];

    const stats = [
        { icon: Award, number: '20+', label: 'Projects Completed' },
        { icon: Target, number: '98%', label: 'Client Satisfaction' },
        { icon: Zap, number: '24/7', label: 'Support Available' }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            Digital Solutions for <br />
                            <span className="text-orange-600">Modern Business</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We combine technical expertise with creative innovation to deliver minimal, effective, and scalable IT solutions.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-gray-200 pt-10 max-w-3xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subtle Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Tailored Services
                    </h2>
                    <div className="h-1 w-20 bg-orange-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive digital services designed to meet your specific business goals with precision and clarity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            to={service.id === 'ecommerce' ? '/contact' : `/services/${service.id}`}
                            className={`group bg-white p-8 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to elevate your business?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Let's collaborate to build digital solutions that matter. Simple, effective, and professional.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-900/20"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
