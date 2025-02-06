import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.Hero}>

          <h1 className={styles.name}>Apple Watch</h1>

          <div className={styles.info}>If you can dream it,<br />Mac can do it.

          </div>

        </section>

        <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4" />
          </video>
        </div>
      </div>
    </> 
  )
}

export default Hero