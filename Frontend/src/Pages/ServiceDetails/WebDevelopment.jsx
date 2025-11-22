import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Code,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Smartphone as Mobile,
    Globe,
    Layout,
    Server,
    Database
} from 'lucide-react';

const WebDevelopment = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: Zap,
            title: 'High Performance',
            description: 'Optimized for speed and efficiency to ensure the best user experience.'
        },
        {
            icon: Mobile,
            title: 'Responsive',
            description: 'Seamlessly adapts to any device screen size, from mobile to desktop.'
        },
        {
            icon: Shield,
            title: 'Secure',
            description: 'Built with industry-standard security practices to protect your data.'
        },
        {
            icon: Globe,
            title: 'SEO Ready',
            description: 'Structured for search engines to help you rank better organically.'
        }
    ];

    const services = [
        'Custom Website Development',
        'E-commerce Platforms',
        'Web Application Development',
        'CMS Development',
        'Progressive Web Apps (PWA)',
        'API Integration',
        'Maintenance & Support',
        'Performance Tuning'
    ];

    const technologies = [
        { name: 'React', icon: Layout },
        { name: 'Node.js', icon: Server },
        { name: 'Next.js', icon: Globe },
        { name: 'TypeScript', icon: Code },
        { name: 'Database', icon: Database },
        { name: 'AWS', icon: Zap }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We analyze your requirements and business goals.'
        },
        {
            step: '02',
            title: 'Design',
            description: 'Creating intuitive and professional UI/UX designs.'
        },
        {
            step: '03',
            title: 'Build',
            description: 'Clean, scalable coding with modern best practices.'
        },
        {
            step: '04',
            title: 'Launch',
            description: 'Testing, deployment, and post-launch support.'
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gray-50">
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
                            <Code className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Web Development</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            Robust Web Solutions for <br />
                            <span className="text-orange-600">Scalable Growth</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We build custom websites and web applications that are fast, secure, and designed to convert.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Capabilities
                            </h2>
                            <div className="h-1 w-16 bg-orange-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 shadow-sm"
                                >
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
                            Technology Stack
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-300"
                                >
                                    <tech.icon className="w-8 h-8 text-gray-400 mb-3" />
                                    <span className="font-semibold text-gray-700">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our Process
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                A streamlined approach to delivering excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {process.map((item, index) => (
                                <div key={index} className="relative group">
                                    <div className="mb-6">
                                        <span className="text-5xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                            {item.step}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Ready to build something great?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Let's discuss your project and how we can help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-600/20"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/services"
                            className="inline-block bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
                        >
                            All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
