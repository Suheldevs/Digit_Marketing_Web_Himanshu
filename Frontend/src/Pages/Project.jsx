import React from "react";


const projects = [
  {
    title: "E-Commerce Website",
    category: "Design, Branding",
    image: "src/assets/image/p2.jpg",
  },
  {
    title: "Blog Website",
    category: "Design, Branding",
    image: "src/assets/image/p1.jpg",
  },
  {
    title: "Hospital Management",
    category: "Design, Branding",
    image: "src/assets/image/p3.jpg",

  },
  {
    title: "Hospital Management",
    category: "Design, Branding",
    image: "src/assets/image/p3.jpg",
  },
  {
    title: "Blog Website",
    category: "Design, Branding",
    image: "src/assets/image/p2.jpg",
  },

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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Project</h1>
          <div className="mt-4 flex items-center justify-center text-sm md:text-base font-medium">
            <span className="text-pink-300">Home</span>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">Project</span>
          </div>
        </div>
      </section>

      <section className="py-30 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-pink-500">Popular</span> Project
        </h2>
        <div className="mt-2 mx-auto w-24 md:w-32 border-b-4 border-pink-400"></div>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded overflow-hidden shadow-lg group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Box */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white p-4 rounded-xl shadow-xl text-center w-11/12 sm:w-4/5 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-pink-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10">
        <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-sm font-semibold transition-all">
          View More <span className="ml-2">»</span>
        </button>
      </div> */}
      </section>
    </>
  );
};

export default Project;
