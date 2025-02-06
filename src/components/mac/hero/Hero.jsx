import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.Hero}>

          <h1 className={styles.name}>Mac</h1>

          <div className={styles.info}>If you can dream it,<br />Mac can do it.

          </div>

        </section>

        <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/large_2x.mp4" />
          </video>
        </div>
      </div>
    </> 
  )
}

export default Hero