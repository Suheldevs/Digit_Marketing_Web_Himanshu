import React, { useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = () => {
  const swiperRef = useRef(null);

  const projects = [
    { url: "https://pristinetower.com/", title: "Pristine Tower" },
    { url: "https://xpresstourtravels.com/", title: "Xpress Tour & Travels" },
    { url: "https://hope-hospital-demo.netlify.app/", title: "Hope Hospital" },
    { url: "https://lancetarchitect.com/", title: "Lancet Architect" },
    { url: "https://drshashikanturology.com/", title: "Dr. Shashikant Urology" },
    { url: "https://ashirwadvastuastro.com/", title: "Ashirwad Vastu Astro" },
    { url: "https://ssgs-architect.netlify.app/", title: "SSGS Architect" },
    { url: "https://amadelectricals.com/", title: "Amad Electricals" },
    { url: "https://batohicaterers.com/", title: "Batohi Caterers" },
    { url: "https://architectrajnish.in/", title: "Architect Rajnish" },
    { url: "https://pora-infratech.netlify.app/", title: "Pora Infratech" },
    { url: "https://retdjudgeashokkumaradvocate.com/", title: "Advocate Ashok Kumar" },
    { url: "https://dss-web.netlify.app/", title: "DSS Web" },
    { url: "https://newsfrontend.netlify.app/", title: "News Portal" },
    { url: "https://shanyascans.com/", title: "Shanya Scans" },
    { url: "https://hrms-demo.netlify.app/", title: "HRMS Demo" },
    { url: "https://dss-crm.onrender.com/", title: "DSS CRM" },
  ];

  return (
    <section id='portfolio' className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Recent <span className="text-orange-600">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            Explore our latest work and see how we help businesses thrive online.
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-600 hover:text-white transition-all duration-300 -ml-4 md:-ml-6 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-600 hover:text-white transition-all duration-300 -mr-4 md:-mr-6 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12 px-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={`https://image.thum.io/get/width/600/crop/800/noanimate/${project.url}`}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(project.title)}`;
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                      <h3 className="text-white text-xl font-bold mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-orange-600/30"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
