import React from 'react'
import styles from './Choose.module.css'

function Choose() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Choose}>Help me Choose</div>
        <div className={styles.body}>

          <div className={styles.imageContainer}>
            <span className={styles.imageText}>Answer a few quetions to<br /> find the best Mac for you</span>
            <img src="https://www.apple.com/v/mac/best-mac/a/images/overview/hero_imac__b2wz9ra15tg2_large_2x.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Choose