import React from 'react'
import AboutBanner from './AboutBanner'
import AboutSection from './AboutSection'
// import Service from '../Service'
import Testimonial from '../../Components/Testimonial'
import TeamMember from '../../Components/TeamMember'


const About = () => {
  return (
    <>
     <AboutBanner/>
     <AboutSection/>
     {/* Not use this code our project */}
     {/* <Service/> */}         
     <TeamMember/>
     <Testimonial/>
    </>
  )
}

export default About
