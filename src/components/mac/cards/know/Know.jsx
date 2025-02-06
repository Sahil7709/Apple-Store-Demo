import React from 'react'
import styles from './Know.module.css'

function Know() {
  return (
    <>
    <div className={styles.Know}>Get to konw Mac</div>

    <div className={styles.cardSlider}>
        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_intelligence__esfi0qmvis6e_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Apple Intelligence and macOS <br /> <span>Hello, Apple Intelligence.</span></span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Performance and Battery Life <br /> Go fast. Go far.</span>
        </div> 

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Mac and iPhone <br /> Dream team</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Compatibility <br />Mac runs your favorite apps.</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg" alt="" />
          <span className={styles.imageText}>Privacy and Security <br />Your business is <br />nobody else's.</span>
        </div>
        
    </div>

    </>
  )
}

export default Know