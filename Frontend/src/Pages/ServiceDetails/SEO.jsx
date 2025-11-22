import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Target,
    BarChart,
    Globe,
    FileText,
    MapPin,
    Link as LinkIcon
} from 'lucide-react';

const SEO = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: TrendingUp,
            title: 'Top Rankings',
            description: 'Achieve and maintain top positions in search engine results pages.'
        },
        {
            icon: Target,
            title: 'Qualified Traffic',
            description: 'Attract visitors who are actively searching for your products or services.'
        },
        {
            icon: BarChart,
            title: 'Measurable ROI',
            description: 'Clear reporting on traffic, rankings, and conversions.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Optimize for both local markets and international audiences.'
        }
    ];

    const services = [
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Technical SEO Audits',
        'Link Building Strategy',
        'Local SEO (GMB)',
        'Content Optimization',
        'Competitor Analysis',
        'Performance Tracking'
    ];

    const tools = [
        { name: 'Google Analytics', icon: BarChart },
        { name: 'Search Console', icon: Search },
        { name: 'SEMrush', icon: Target },
        { name: 'Ahrefs', icon: LinkIcon },
        { name: 'Moz', icon: Globe },
        { name: 'Screaming Frog', icon: FileText }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gray-50">
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
                            <Search className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Search Optimization</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            Dominate <br />
                            <span className="text-orange-600">Search Results</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Data-driven SEO strategies that increase visibility, drive organic traffic, and deliver long-term growth.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300"
                        >
                            Analyze Your Site
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
                                SEO Services
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

            {/* Tools */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
                            SEO Toolkit
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-300"
                                >
                                    <tool.icon className="w-8 h-8 text-gray-400 mb-3" />
                                    <span className="font-semibold text-gray-700">{tool.name}</span>
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
                        Want higher rankings?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Let's optimize your online presence for maximum visibility.
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

export default SEO;
