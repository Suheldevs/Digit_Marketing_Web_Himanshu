import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Daniel Howell",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jay Houston",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    message:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Austin Houston",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Austin Houston",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Austin Houston",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-white text-center px-4">
      <p className="text-pink-500 font-semibold text-sm mb-2">Clients Say</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
        Know Everything About <br />
        <span className="text-gray-800">Professional Skills</span>
      </h2>
      <div className="mt-2 w-20 mx-auto border-b-4 border-pink-400"></div>

      <div className="mt-10 max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white p-6 rounded-lg shadow-lg mt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <p className="mt-8 text-gray-600 text-sm leading-relaxed">
                  {item.message}
                </p>
                <h4 className="mt-6 font-bold text-gray-800">{item.name}</h4>
                <p className="text-pink-500 text-sm">{item.role}</p>
                <div className="text-3xl text-blue-600 mt-2">”</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
