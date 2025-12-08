import React from 'react'
import Hero from '../Components/Hero'
import Connect from '../Components/Connect'
import Testimonial from '../Components/Testimonial'
import ProjectDisplay from '../Components/ProjectDisplay'
import Service from '../Components/Service'
import AboutSection from '../Components/AboutSection'
import CTASection from '../Components/CTASection'


const Home = () => {
  return (
    <section>
      <Hero/>
      <AboutSection/>
      <Service/>
      <CTASection/>
      <ProjectDisplay/>
      <Testimonial/>
      <Connect/>
    </section>
  )
}

export default Home
