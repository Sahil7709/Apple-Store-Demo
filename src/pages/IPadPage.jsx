import React from 'react'
import Hero from '../components/ipad/hero/Hero'
import Know from '../components/ipad/cards/know/Know'
import Lineup from '../components/ipad/cards/lineup/Lineup'
import Trade from '../components/ipad/cards/trade/Trade'
import Why from '../components/ipad/cards/why/Why'
import Significant from '../components/ipad/cards/significant/Significant'
import Essential from '../components/ipad/cards/essential/Essential'
import Ipad from '../components/ipad/cards/ipad/Ipad'

function IPadPage() {
  return (
    <div>
      <Hero />
      <Know/>
      <Lineup />
      <Trade />
      <Why />
      <Significant />
      <Essential />
      <Ipad />

    </div>
  )
}

export default IPadPage