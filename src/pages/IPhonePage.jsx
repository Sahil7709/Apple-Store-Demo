import React from 'react'
import Hero from '../components/iphone/hero/Hero'
import Know from '../components/iphone/cards/know/Know'
import Lineup from '../components/iphone/cards/lineup/Lineup'
import Trade from '../components/iphone/cards/trade/Trade'
import Why from '../components/iphone/cards/why/Why'
import Significant from '../components/iphone/cards/significant/Significant'
import Essential from '../components/iphone/cards/essential/Essential'
import Iphone from '../components/iphone/cards/iphone/Iphone'

function IPhonePage() {
  return (
    <div>
      <Hero />
      <Know />
      <Lineup />
      <Trade />
      <Why />
      <Significant />
      <Essential />
      <Iphone />
    </div>
  )
}

export default IPhonePage