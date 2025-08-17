import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Search, 
  TrendingUp, 
  Palette, 
  Smartphone, 
  ArrowRight, 
  Check,
  Star,
  Zap,
  Award,
  Target,
  BarChart3
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 'webdev',
      title: 'Web Development',
      icon: Code,
      shortDesc: 'Custom websites & web applications',
      description: 'Transform your ideas into powerful, scalable web solutions with cutting-edge technologies and modern design principles.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'CMS Integration',
        'API Development',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      deliverables: '15-30 Days',
      startingPrice: '$2,999'
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      icon: Search,
      shortDesc: 'Boost your online visibility',
      description: 'Dominate search results and drive organic traffic with data-driven SEO strategies that deliver measurable results.',
      features: [
        'Technical SEO Audit',
        'Keyword Research',
        'On-Page Optimization',
        'Link Building',
        'Content Strategy',
        'Performance Tracking'
      ],
      technologies: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      deliverables: '30-90 Days',
      startingPrice: '$1,499'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      shortDesc: 'Grow your brand online',
      description: 'Accelerate your growth with comprehensive digital marketing campaigns that convert prospects into loyal customers.',
      features: [
        'Social Media Marketing',
        'PPC Advertising',
        'Content Marketing',
        'Email Campaigns',
        'Influencer Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Facebook Ads', 'Google Ads', 'HubSpot', 'Mailchimp'],
      gradient: 'from-orange-500 to-pink-500',
      bgGradient: 'from-orange-50 to-pink-50',
      deliverables: '30-60 Days',
      startingPrice: '$1,999'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: Palette,
      shortDesc: 'Visual identity & branding',
      description: 'Create stunning visual experiences that capture your brand essence and leave lasting impressions on your audience.',
      features: [
        'Brand Identity Design',
        'Logo & Icon Design',
        'Marketing Materials',
        'Web Graphics',
        'Print Design',
        'Brand Guidelines'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      deliverables: '7-21 Days',
      startingPrice: '$799'
    },
    {
      id: 'app-development',
      title: 'App Development',
      icon: Smartphone,
      shortDesc: 'Mobile & desktop applications',
      description: 'Build powerful, user-friendly mobile and desktop applications that engage users and drive business growth.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'UI/UX Design',
        'Backend Integration',
        'App Store Deployment',
        'Ongoing Maintenance'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      deliverables: '60-120 Days',
      startingPrice: '$4,999'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full border border-orange-200 mb-6">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Premium Digital 
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we deliver comprehensive digital solutions that drive growth, 
            enhance user experience, and maximize your ROI.
          </p>
        </div>



        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:scale-105 hover:-translate-y-2 overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300 shadow-lg group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white/90 transition-all duration-300 text-sm">
                  {service.description}
                </p>
                
                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full group-hover:bg-white transition-all duration-300`}></div>
                      <span className="text-gray-600 group-hover:text-white/80 transition-all duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500 group-hover:text-white/60 transition-all duration-300 pl-4">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
             
                
                {/* CTA Button */}
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-sm border border-transparent group-hover:border-white/30 flex items-center justify-center space-x-2">
                  <span>View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Services?</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped hundreds of businesses achieve digital success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, number: '500+', label: 'Projects Completed' },
              { icon: Star, number: '98%', label: 'Client Satisfaction' },
              { icon: Zap, number: '24/7', label: 'Support Available' },
              { icon: BarChart3, number: '300%', label: 'Average ROI Increase' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;