import React from 'react'
import Hero from '../components/store/hero/Hero'
import Latest from '../components/store/cards/latest/Latest'
import Personalization from '../components/store/cards/personalization/Personalization'
import Holiday from '../components/store/cards/holiday/Holiday'
import Only from '../components/store/cards/only/Only'
import Experience from '../components/store/cards/experience/Experience'
import Special from '../components/store/cards/special/Special'

function StorePage() {
  return (
    <div>
      <Hero />
      <Latest/>
      <Personalization/>
      <Holiday/>
      <Only/>
      <Experience/>
      <Special/>
    </div>
  )
}

export default StorePage