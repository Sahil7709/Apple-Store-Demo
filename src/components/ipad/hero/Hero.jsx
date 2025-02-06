import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.Hero}>

          <h1 className={styles.name}>iPad</h1>

          <div className={styles.info}>Touch, draw, and type <br />on one magical device.</div>

        </section>

        <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large_2x.mp4" />
          </video>
        </div>
      </div>

    </>
  )
}

export default Hero