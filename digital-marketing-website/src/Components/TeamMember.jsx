import React from 'react';

const teamMembers = [
  {
    name: 'Ricardo Torres',
    role: 'Web Designer',
    imageBg: 'bg-red-400',
    gender: 'female',
    social: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-behance'],
  },
  {
    name: 'Paul Sanchez',
    role: 'Web Designer',
    imageBg: 'bg-sky-300',
    gender: 'male',
    social: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-behance'],
  },
  {
    name: 'Herbert Waters',
    role: 'Web Designer',
    imageBg: 'bg-yellow-300',
    gender: 'female',
    social: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-behance'],
  },
  {
    name: 'Jeremy Harrington',
    role: 'Web Designer',
    imageBg: 'bg-cyan-700',
    gender: 'male',
    social: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-behance'],
  },
];

function TeamMember() {
  return (
    <div className="min-h-screen p-4 md:p-10 bg-white font-sans">
      <div className="text-center mb-12">
        <h5 className="text-pink-500 uppercase tracking-widest font-semibold">Our Team</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Meet Our Exclusive <br /> Team Member
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="group text-center relative">
            {/* Background with Avatar */}
            <div className={`w-full h-64 flex items-center justify-center ${member.imageBg} rounded-md`}>
              <div className="w-28 h-28 bg-white rounded-full shadow-md"></div>
            </div>

            {/* Info Box */}
            <div className="relative -mt-10 bg-white mx-4 p-4 shadow-lg rounded-md z-10 transition-all duration-300 group-hover:translate-y-0">
              <div className="flex justify-center gap-3 text-pink-500 mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {member.social &&
                  member.social.map((icon, i) => (
                    <i key={i} className={`fab ${icon} cursor-pointer`}></i>
                  ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-pink-500 font-medium mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
