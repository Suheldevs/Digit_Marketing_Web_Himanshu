import React, { useState } from 'react';
import {
    Check,
    ChevronRight,
    Sparkles,
    Zap,
    Crown,
    Code,
    Smartphone,
    TrendingUp,
    Shield,
    Clock,
    Users,
    Star,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [activeCategory, setActiveCategory] = useState('wordpress');

    const categories = [
        { id: 'wordpress', name: 'WordPress Websites', icon: Code },
        { id: 'app', name: 'App Development', icon: Smartphone },
        { id: 'seo', name: 'SEO & Marketing', icon: TrendingUp }
    ];

    const wordpressPackages = [
        {
            name: 'Basic',
            price: '₹15,000',
            icon: Sparkles,
            color: 'green',
            gradient: 'from-green-500 to-emerald-600',
            description: 'Perfect for small businesses, personal portfolios, or startups.',
            features: [
                'Up to 5 pages (Home, About, Services, Contact, Blog)',
                'Responsive (Mobile + Tablet Friendly)',
                'Free SSL & Basic Security Setup',
                '1 Month Free Support'
            ],
            popular: false
        },
        {
            name: 'Standard',
            price: '₹25,000',
            icon: Zap,
            color: 'blue',
            gradient: 'from-blue-500 to-indigo-600',
            description: 'Best for growing brands and small enterprises.',
            features: [
                'Up to 10 pages',
                'Custom Design & Branding',
                'Contact Forms & Social Media Integration',
                'Basic SEO Optimization',
                '3 Months Free Support'
            ],
            popular: true
        },
        {
            name: 'Premium',
            price: '₹40,000+',
            icon: Crown,
            color: 'red',
            gradient: 'from-red-500 to-pink-600',
            description: 'Ideal for professional businesses needing advanced features.',
            features: [
                'Unlimited Pages',
                'eCommerce Functionality (WooCommerce)',
                'Blog Setup + Content Upload',
                'Speed Optimization',
                '6 Months Priority Support'
            ],
            popular: false
        }
    ];

    const appPackages = [
        {
            name: 'Starter App',
            price: '₹50,000+',
            icon: Sparkles,
            color: 'green',
            gradient: 'from-green-500 to-emerald-600',
            description: 'For MVPs, prototypes, or small business apps.',
            features: [
                'Android App (Basic UI)',
                '3–5 Core Features',
                'Backend Integration',
                '2 Rounds of Revisions'
            ],
            popular: false
        },
        {
            name: 'Business App',
            price: '₹1,00,000+',
            icon: Zap,
            color: 'blue',
            gradient: 'from-blue-500 to-indigo-600',
            description: 'For scaling businesses looking for a complete digital presence.',
            features: [
                'Android + iOS Apps',
                'Custom UI/UX Design',
                'API Integration',
                'Admin Dashboard',
                '3 Months Maintenance'
            ],
            popular: true
        },
        {
            name: 'Enterprise App',
            price: '₹2,00,000+',
            icon: Crown,
            color: 'red',
            gradient: 'from-red-500 to-pink-600',
            description: 'For large-scale apps with complex systems.',
            features: [
                'Full Custom Development',
                'Scalable Architecture',
                'Multi-User / Role Management',
                'Analytics Dashboard',
                '6 Months Support & Maintenance'
            ],
            popular: false
        }
    ];

    const seoPackages = [
        {
            name: 'Starter SEO',
            price: '₹10,000/month',
            icon: Sparkles,
            color: 'green',
            gradient: 'from-green-500 to-emerald-600',
            description: 'For businesses starting to grow online.',
            features: [
                'On-Page Optimization',
                'Google My Business Setup',
                '5 Keywords Targeting',
                'Monthly Performance Report'
            ],
            popular: false
        },
        {
            name: 'Growth SEO',
            price: '₹20,000/month',
            icon: Zap,
            color: 'blue',
            gradient: 'from-blue-500 to-indigo-600',
            description: 'For small to mid-level brands wanting steady traffic growth.',
            features: [
                '10 Keywords Targeting',
                'Backlink Building',
                'Content Optimization',
                'Competitor Analysis',
                'Monthly Reports + Strategy Calls'
            ],
            popular: true
        },
        {
            name: 'Pro SEO',
            price: '₹35,000/month',
            icon: Crown,
            color: 'red',
            gradient: 'from-red-500 to-pink-600',
            description: 'For brands aiming for top-tier search rankings.',
            features: [
                '20+ Keywords Targeting',
                'Technical SEO Audit',
                'Blog Strategy & Optimization',
                'Link Building Campaigns',
                'Weekly Reports + Dedicated Manager'
            ],
            popular: false
        }
    ];

    const getCurrentPackages = () => {
        switch (activeCategory) {
            case 'wordpress':
                return wordpressPackages;
            case 'app':
                return appPackages;
            case 'seo':
                return seoPackages;
            default:
                return wordpressPackages;
        }
    };

    const trustBadges = [
        { icon: Shield, text: 'No Hidden Charges' },
        { icon: Clock, text: 'On-Time Delivery' },
        { icon: Users, text: '200+ Happy Clients' },
        { icon: Star, text: '5-Star Rated' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 mb-6">
                            <Link to="/" className="hover:text-orange-600 transition-colors cursor-pointer">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-orange-600">Our Packages</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
                            💼 Pricing & Packages
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                            We follow a <span className="font-semibold text-orange-600">transparent and honest pricing policy</span> so you always know exactly what you're paying for. <span className="font-semibold">No hidden charges, no unexpected fees</span> — just clear, upfront pricing designed to give you complete trust and peace of mind.
                        </p>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    <badge.icon className="w-6 h-6 text-orange-600" />
                                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="bg-white py-8 sticky top-20 z-40 border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <category.icon className="w-5 h-5" />
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {getCurrentPackages().map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${pkg.popular
                                        ? 'border-orange-500 ring-4 ring-orange-100'
                                        : 'border-gray-100 hover:border-orange-200'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <pkg.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Package Name */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                            {pkg.price}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-0.5">
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                </div>
                                                <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link to="/contact">
                                        <button
                                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
                                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40'
                                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                                }`}
                                        >
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Not Sure Which Package is Right for You?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Our team is here to help you choose the perfect solution for your business needs. Get a free consultation today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                                    Talk to Our Team
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <a href="tel:+918318159403">
                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                                    Call: +91 8318159403
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </section>
        </>
    );
};

export default Packages;
