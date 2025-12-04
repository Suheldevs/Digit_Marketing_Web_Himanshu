import React from "react";
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Project = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/banner-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Project</h1>
          <div className="mt-4 flex items-center justify-center text-sm md:text-base font-medium">
            <Link to="/" className="text-orange-200 hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">Project</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-orange-500">Popular</span> Projects
        </h2>
        <div className="mt-2 mx-auto w-24 md:w-32 border-b-4 border-orange-400"></div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
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
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
