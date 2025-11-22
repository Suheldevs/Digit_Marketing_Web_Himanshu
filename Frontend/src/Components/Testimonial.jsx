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
    <section className="py-20 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 transform transition-all duration-1000">
          <span className="text-orange-600 font-medium uppercase tracking-wider mb-6 block">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Say About Us</span>
          </h2>

          <div className="h-2 w-1/3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6 mx-auto"></div>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-pink-600'
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 !px-4"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col relative group">
                  <div className="absolute top-6 right-8 text-6xl text-pink-100 font-serif leading-none group-hover:text-pink-200 transition-colors">
                    ”
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white relative z-10"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                      <p className="text-pink-600 text-sm font-medium">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-gray-600 leading-relaxed italic relative z-10">
                      "{item.message}"
                    </p>
                  </div>

                  <div className="mt-6 flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
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

export default Testimonial;
