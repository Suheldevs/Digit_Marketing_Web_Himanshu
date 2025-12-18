import React from 'react';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Rocket,
  Shield,
  Zap,
  Globe,
  Code,
  Smartphone,
  Search,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutBanner from './AboutBanner';
import TeamMember from '../../Components/TeamMember';
import Testimonial from '../../Components/Testimonial';

const About = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, number: '20+', label: 'Projects Completed', color: 'from-orange-500 to-orange-600' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'from-green-500 to-green-600' },
    { icon: Globe, number: '24/7', label: 'Support Available', color: 'from-purple-500 to-purple-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Innovation & Excellence',
      description: 'We stay ahead of the curve with cutting-edge technologies and best practices in every project.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'No hidden costs, clear communication, and honest pricing. We build relationships based on trust.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive growth and ROI for your business.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android'
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'SEO, social media, and comprehensive digital marketing strategies'
    }
  ];

  const whyChooseUs = [
    'Experienced team of developers and designers',
    'Proven track record with 200+ successful projects',
    'Transparent pricing with no hidden charges',
    'On-time delivery and 24/7 support',
    'Latest technologies and best practices',
    'Customized solutions for your unique needs'
  ];

  return (
    <>
      <AboutBanner />

      {/* Company Overview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-200 to-blue-200 rounded-2xl opacity-20"></div>
                <img
                  src="/image/p1.jpg"
                  alt="CodeClicks Team"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">About CodeClicks</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                  Building Digital Excellence Since 2019
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <span className="font-semibold text-orange-600">CodeClicks</span> is a leading digital solutions provider based in Lucknow, specializing in web development, mobile app development, and comprehensive digital marketing services.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are a team of passionate developers, designers, and digital marketers dedicated to transforming businesses through innovative technology solutions. Our mission is to help startups, small businesses, and enterprises establish a powerful digital presence and achieve their growth objectives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With over <span className="font-semibold text-orange-600">200+ successful projects</span> delivered and a <span className="font-semibold text-green-600">98% client satisfaction rate</span>, we've established ourselves as a trusted partner for businesses looking to thrive in the digital landscape.
                </p>

                <Link to="/contact">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                    Get Started with Us
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and deliver measurable results. We strive to be the trusted technology partner that transforms ideas into successful digital realities.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To become India's most trusted digital solutions provider, recognized for excellence in innovation, quality, and customer satisfaction. We envision a future where every business, regardless of size, has access to world-class digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Our Values</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values shape everything we do and guide us in delivering exceptional results for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                What We Do Best
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div>
                <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                  Your Trusted Digital Partner
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We combine technical expertise with creative innovation to deliver solutions that not only meet but exceed your expectations. Here's why businesses trust us:
                </p>

                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-1">
                        <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link to="/packages">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                      View Our Packages
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-orange-200 rounded-2xl opacity-20"></div>
                <img
                  src="/image/p3.jpg"
                  alt="Why Choose CodeClicks"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamMember />

      {/* Testimonials */}
      <Testimonial />

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
            <Heart className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's work together to bring your vision to life. Our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                  Get in Touch
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/packages">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  View Pricing
                </button>
              </Link>
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

export default About;
