import React from 'react';
import { Link } from 'react-router-dom'

const ServiceCard = ({ data }) => {
    return (
        <Link to={data?.link} className="relative rounded-[1rem] shadow-lg overflow-hidden md:max-w-[18rem] w-full  group  hover:shadow-xl ">
            <img src={data?.image} alt="Service" className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004658] via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-[#243b41]  hover:to-transparent transition-all duration-300 ">
                <div className="relative z-10 text-center text-white mb-7">
         
                    <div tabIndex="0" className="text-[1rem] sora-600 leading-tight  w-fit px-4">
                        <p className='text-white font-semibold'   dangerouslySetInnerHTML={{ __html: data?.title }} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
