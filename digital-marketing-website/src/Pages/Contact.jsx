import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section
        className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/banner-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <div className="mt-4 flex items-center justify-center text-sm md:text-base font-medium">
            <span className="text-pink-300">Home</span>
            <FaAngleDoubleRight className="mx-2 text-white" />
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2 */}

      <section className="px-4 py-10 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Don't Hesitate To <br /> Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus erro voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-500 mt-1" />
                <span>
                  <strong className="text-pink-600">Address :</strong> 27
                  Division St, New York, NY 10002, USA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-pink-500 mt-1" />
                <span>
                  <strong className="text-pink-600">Call Us :</strong>{" "}
                  08964712365
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-pink-500 mt-1" />
                <span>
                  <strong className="text-pink-600">Email Us :</strong>{" "}
                  support@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus erro voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b outline-none p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b outline-none p-2 w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border-b outline-none p-2 w-full"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="border-b outline-none p-2 w-full"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-600 transition"
              >
                Send Message <FaAngleDoubleRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
