import React from 'react'
import styles from './Essential.module.css'

function Essential() {
  return (
    <>
      <div className={styles.Essential}>iPad essentials.</div>

      <div className={styles.body}>

        <section className={styles.imageContainer}>
          <h2>Apple Pencil</h2>
          <img src="https://www.apple.com/v/apple-pencil/ae/images/overview/pro/hero__z7kty0msgsya_large_2x.jpg" alt="" />
        </section>
        
        <section className={styles.imageContainer}>
          <h2>Keyboards for iPad</h2>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/essentials/bc_keyboard__b2j4vh67cw76_large_2x.png" alt="" />
        </section>

      </div>

    </>
  )
}

export default Essential