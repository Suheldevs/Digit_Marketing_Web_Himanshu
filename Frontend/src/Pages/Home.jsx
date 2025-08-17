import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Connect from '../Components/Connect'
import Testimonial from '../Components/Testimonial'
import ProjectDisplay from '../Components/ProjectDisplay'


const Home = () => {
  return (
    <section>
      <Hero/>
      <Services/>
      <ProjectDisplay/>
      <Testimonial/>
      <Connect/>
    </section>
  )
}

export default Home
