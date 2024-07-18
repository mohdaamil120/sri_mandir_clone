import React from 'react'
import HeroImage from '../components/HeroImage'
import ExploreSriMandir from '../components/ExploreSriMandir'
import MediaOutlets from '../components/MediaOutlets'
import PujaSeva from '../components/PujaSeva'
import Panchang from '../components/Panchang'
import Testimonial from '../components/Testimonial'
import Rating from '../components/Rating'
import Features from '../components/Features'

function Home() {
  return (
    <div>
      <HeroImage/>
      <ExploreSriMandir/>
      <MediaOutlets/>
      <PujaSeva/>
      <Panchang/>
      <Testimonial/>
      <Rating/>
      <Features/>
    </div>
  )
}

export default Home
