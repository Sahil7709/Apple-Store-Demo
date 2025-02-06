import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.Hero}>

          <h1 className={styles.name}>Apple Vision Pro</h1>

          <div className={styles.info}>Vision

          </div>

        </section>

        <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/apple-vision-pro/guided-tour/2024/7c64af40-2add-42ef-886f-18a5725bc188/anim/hero/large.mp4" />
          </video>
        </div>
      </div>
    </> 
  )
}

export default Hero