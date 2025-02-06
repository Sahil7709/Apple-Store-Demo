import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.Hero}>

          <h1 className={styles.name}>iPhone</h1>

          <div className={styles.info}>Designed to be loved.

          </div>

        </section>

        <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large_2x.mp4" />
          </video>
        </div>
      </div>
    </> 
  )
}

export default Hero