import React from 'react'
import styles from './Know.module.css'

function Know() {
  return (
    <>
      <div className={styles.Know}>Get to konw iPad</div>

      <div className={styles.cardSlider}>
        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_apple_intelligence__dnpeq34arlg2_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Apple Intelligence and macOS <br /> <span>Hello, Apple Intelligence.</span></span>
        </div>

        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_productivity__d55aee5so6ky_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Performance and Battery Life <br /> Go fast. Go far.</span>
        </div>

        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_creativity__gcfv7x90x42u_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Mac and iPhone <br /> Dream team</span>
        </div>

        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_learning__es1tt702bf6u_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Compatibility <br />Mac runs your favorite apps.</span>
        </div>

        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_pencil__coz76i7lwsuq_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Privacy and Security <br />Your business is <br />nobody else's.</span>
        </div>

        <div className={styles.imageContainer}>
          <img src="https://www.apple.com/v/ipad/home/cm/images/overview/consider/fc_ipados__urrua12bwaqy_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Privacy and Security <br />Your business is <br />nobody else's.</span>
        </div>
      </div>

    </>
  )
}

export default Know