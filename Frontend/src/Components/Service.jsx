import React from 'react';
import service1 from '../assets/Service/website.jpg';
import service2 from '../assets/Service/Software2.jpg';
import service4 from '../assets/Service/Mobile.jpg';
import icon1 from '../assets/Service/Graphic.jpg';
import icon2 from '../assets/Service/Software.jpg';
import icon3 from '../assets/Service/SEO.jpg';
import icon4 from '../assets/Service/SocialMedia.jpg';
import icon5 from '../assets/Service/ecomerce1.jpg';
import ServiceCard from './ServiceCard';

const Service = () => {
  const data = [
    {
      title: "Website Design",
      icon: icon1,
      image: service1,
      link: "/service/web-development"
    },
    {
      title: "Custom Software Development",
      icon: icon2,
      image: service2,
      link: "/service/crmsoftwaremanagement"
    },
    {
      title: "Mobile App Development",
      icon: icon3,
      image: service4,
      link: "/service/app-development"
    },
    {
      title: "Ecommerce Solutions",
      icon: icon4,
      image: icon5,
      link: "/service/ecommerceapp"
    },
    {
      title: "Digital Marketing",
      icon: icon1,
      image: icon1,
      link: "/service/digital-marketing"
    },
    {
      title: "Search Engine Optimization",
      icon: icon3,
      image: icon3,
      link: "/service/seo"
    },
    {
      title: "Social Media Optimization",
      icon: icon3,
      image: icon4,
      link: "/service/socialmediamarketing"
    },
    {
      title: "Web/VPS Hosting",
      icon: icon1,
      image: icon2,
      link: "/service/webvpshosting"
    }
  ];

  return (
    <div className='flex bg-gray-50 flex-col items-center justify-center mb-10 bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 container mx-auto'>

      {/* Header Section with Orange Theme */}
      <div className="text-center mb-6 transform transition-all duration-1000">

        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600">
            We Offer
          </span>
        </h2>

        {/* Decorative Orange Line */}
        <div className="h-2 w-1/3 bg-gradient-to-r from-orange-600 to-orange-600 rounded-full mb-6 mx-auto"></div>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Innovative solutions in Web Development, SEO, and Digital Marketing to help businesses grow and thrive online
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl'>
        {data?.map((dat, ind) => <ServiceCard key={ind} data={dat} />)}
      </div>
    </div>
  );
};

export default Service;
