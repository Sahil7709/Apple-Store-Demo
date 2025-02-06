import React from 'react'
import Hero from '../components/watch/hero/Hero'
import Watch from '../components/watch/cards/watch/Watch'
import Know from '../components/watch/cards/know/Know'
import Choose from '../components/watch/cards/choose/Choose'
import Lineup from '../components/watch/cards/lineup/Lineup'
import Trade from '../components/watch/cards/trade/Trade'
import Why from '../components/watch/cards/why/Why'
import Significant from '../components/watch/cards/significant/Significant'
import Essential from '../components/watch/cards/essential/Essential'

function WatchPage() {
  return (
    <div>
      <Hero />
      <Know />
      <Choose />
      <Lineup />
      <Trade />
      <Why />
      <Significant />
      <Essential />
      <Watch />
    </div>
  )
}

export default WatchPage