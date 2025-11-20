import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  Code, 
  Search, 
  Palette, 
  Smartphone,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'mobile-app', name: 'Mobile Apps', icon: Smartphone },
    { id: 'seo', name: 'SEO', icon: Search },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web-development",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      result: "+150% Sales",
      link: "/projects/ecommerce-platform"
    },
    {
      id: 2,
      title: "Restaurant Mobile App",
      category: "mobile-app",
      description: "Cross-platform mobile app for food ordering with real-time tracking and loyalty program.",
      tags: ["React Native", "Firebase", "Maps API"],
      result: "50k+ Downloads",
      link: "/projects/restaurant-app"
    },
    {
      id: 3,
      title: "Law Firm SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO strategy that boosted organic traffic and local search visibility.",
      tags: ["SEO", "Local Search", "Analytics"],
      result: "+300% Traffic",
      link: "/projects/law-firm-seo"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity including logo, color palette, typography, and guidelines.",
      tags: ["Branding", "Logo Design", "Style Guide"],
      result: "+200% Recognition",
      link: "/projects/brand-identity"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "web-development",
      description: "Modern dashboard with real-time analytics, user management, and billing integration.",
      tags: ["Vue.js", "D3.js", "AWS"],
      result: "40% Better UX",
      link: "/projects/saas-dashboard"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "marketing",
      description: "Multi-platform campaign with influencer partnerships and user-generated content.",
      tags: ["Social Media", "Influencer", "Content"],
      result: "+500% Engagement",
      link: "/projects/social-campaign"
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "mobile-app",
      description: "iOS and Android fitness app with workout plans and progress tracking.",
      tags: ["Flutter", "HealthKit", "Firebase"],
      result: "100k+ Users",
      link: "/projects/fitness-app"
    },
    {
      id: 8,
      title: "Corporate Website",
      category: "web-development",
      description: "Professional corporate website with CMS integration and performance optimization.",
      tags: ["WordPress", "PHP", "SEO"],
      result: "+180% Leads",
      link: "/projects/corporate-website"
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

  const handleProjectClick = (link) => {
    window.location.href = link;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Orange Theme (Same as Service Section) */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-orange-600 font-medium uppercase tracking-wider mb-6 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Projects
            </span>
          </h2>
          
          {/* Decorative Orange Line */}
          <div className="h-2 w-1/3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6 mx-auto"></div>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore our recent projects and success stories that showcase our expertise in delivering exceptional digital solutions
          </p>
        </div>

        {/* Filter Chips */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4" />}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Slider */}
        <div className={`relative transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Custom Navigation Buttons */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all duration-300 -ml-6 group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all duration-300 -mr-6 group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-orange'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  onClick={() => handleProjectClick(project.link)}
                  className="group bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:border-orange-300 hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full border border-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Result & Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-green-600">
                      {project.result}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Show message if no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active-orange {
          background: linear-gradient(to right, #f97316, #ec4899);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
