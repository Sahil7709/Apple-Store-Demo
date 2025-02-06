import React from 'react'
import styles from './Significant.module.css'

function Significant() {
  return (

    <>
      <div className={styles.container}>
      <div className={styles.Significant}>Significant others</div>
      <div className={styles.body}>

          <div className={styles.imageContainer}>

            <span className={styles.imageText}>
              <h2 className={styles.h2}>
                Mac and iPhone
              </h2>
              Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.
            </span>

            <img src="https://www.apple.com/v/ipad-pro/ar/images/overview/closer-look/space-black/slide_3A__fmel0mesnxqq_large_2x.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Significant