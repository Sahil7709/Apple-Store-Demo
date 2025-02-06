import React from 'react'
import Hero from '../components/mac/hero/Hero'
import Know from '../components/mac/cards/know/Know'
import Choose from '../components/mac/cards/choose/Choose'
import Lineup from '../components/mac/cards/lineup/Lineup'
import Trade from '../components/mac/cards/trade/Trade'
import Why from '../components/mac/cards/why/Why'
import Significant from '../components/mac/cards/significant/Significant'
import Essential from '../components/mac/cards/essential/Essential'
import Mac from '../components/mac/cards/mac/Mac'

function MacPage() {
  return (
    <div>
        <Hero />
        <Know />
        <Choose/>
        <Lineup/>
        <Trade/>
        <Why/>
        <Significant/>
        <Essential/>
        <Mac/>
    </div>
  )
}

export default MacPage