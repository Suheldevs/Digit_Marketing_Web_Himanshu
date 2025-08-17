import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Calendar,
  Tag,
  Award,
  TrendingUp,
  Users,
  Code,
  Search,
  Palette,
  Smartphone,
  Filter,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Award },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'mobile-app', name: 'Mobile Apps', icon: Smartphone },
    { id: 'seo', name: 'SEO Projects', icon: Search },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web-development",
      client: "TechStore Inc",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and real-time inventory management.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      timeline: "3 months",
      result: "+150% sales increase",
      status: "completed",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      title: "Restaurant Mobile App",
      category: "mobile-app",
      client: "FoodieDelight",
      description: "Cross-platform mobile app for food ordering with real-time tracking and loyalty program integration.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "Stripe", "Maps API"],
      timeline: "4 months",
      result: "50k+ downloads",
      status: "completed",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 3,
      title: "Law Firm Website SEO",
      category: "seo",
      client: "Legal Partners",
      description: "Comprehensive SEO strategy that boosted organic traffic and local search visibility for a law firm.",
      image: "/api/placeholder/400/300",
      tags: ["SEO", "Local Search", "Content Strategy", "Analytics"],
      timeline: "6 months",
      result: "+300% organic traffic",
      status: "completed",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "design",
      client: "StartupXYZ",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      image: "/api/placeholder/400/300",
      tags: ["Branding", "Logo Design", "Adobe Creative", "Style Guide"],
      timeline: "2 months",
      result: "Brand recognition +200%",
      status: "completed",
      featured: false,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "web-development",
      client: "CloudTech Solutions",
      description: "Modern dashboard for SaaS platform with real-time analytics, user management, and billing integration.",
      image: "/api/placeholder/400/300",
      tags: ["Vue.js", "D3.js", "Python", "AWS"],
      timeline: "5 months",
      result: "40% better UX metrics",
      status: "in-progress",
      featured: true,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "marketing",
      client: "Fashion Boutique",
      description: "Multi-platform social media marketing campaign with influencer partnerships and user-generated content.",
      image: "/api/placeholder/400/300",
      tags: ["Social Media", "Influencer Marketing", "Content Creation", "Analytics"],
      timeline: "3 months",
      result: "+500% engagement",
      status: "completed",
      featured: false,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "mobile-app",
      client: "FitLife Pro",
      description: "iOS and Android fitness app with workout plans, progress tracking, and social features.",
      image: "/api/placeholder/400/300",
      tags: ["Flutter", "HealthKit", "Firebase", "ML Kit"],
      timeline: "6 months",
      result: "100k+ active users",
      status: "completed",
      featured: true,
      gradient: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      id: 8,
      title: "Corporate Website",
      category: "web-development",
      client: "Business Solutions Ltd",
      description: "Professional corporate website with CMS integration, contact forms, and performance optimization.",
      image: "/api/placeholder/400/300",
      tags: ["WordPress", "PHP", "MySQL", "SEO"],
      timeline: "2 months",
      result: "+180% lead generation",
      status: "completed",
      featured: false,
      gradient: "from-gray-600 to-gray-800",
      bgColor: "from-gray-50 to-slate-50"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full border border-orange-200 mb-6">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Featured 
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent work and see how we've helped businesses transform their digital presence 
            with innovative solutions and measurable results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter(project => project.featured)
              .slice(0, 2)
              .map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`h-64 bg-gradient-to-br ${project.bgColor} flex items-center justify-center relative`}>
                    {/* Placeholder for actual image */}
                    <div className="text-6xl font-bold text-gray-300">
                      {project.title.charAt(0)}
                    </div>
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center`}>
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex space-x-4">
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{project.client}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold text-green-600">{project.result}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filteredProjects
            .filter(project => !project.featured)
            .map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Thumbnail */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.bgColor} flex items-center justify-center relative`}>
                  <div className="text-4xl font-bold text-gray-300">
                    {project.title.charAt(0)}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center`}>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status === 'completed' ? '✓' : '⏳'}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{project.timeline}</span>
                  <span className="font-semibold text-green-600">{project.result}</span>
                </div>

                {/* CTA */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-orange-100 hover:text-orange-600 transition-all duration-200 text-sm">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                View All Projects
              </button>
            </div>
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
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;