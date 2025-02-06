import React from 'react'
import Hero from '../components/home/hero/Hero'
import Iphone16pro from '../components/home/cards/iphone16pro/Iphone16pro'
import Iphone16 from '../components/home/cards/iphone16/Iphone16'
import Air from '../components/home/cards/air/Air'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Iphone16pro/>
        <Iphone16/>
        <Air/>
    </div>
  )
}

export default HomePage