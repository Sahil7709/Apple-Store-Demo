import React from 'react'
import styles from './Essential.module.css'

function Essential() {
  return (
    <>
    <div className={styles.Essential}>iPhone essentials.</div>

    <div className={styles.image}>
    <img src="https://www.apple.com/v/iphone/home/bx/images/overview/essentials/magsafe__dac2joyve8wi_large_2x.jpg" alt="" />
    <img src="https://www.apple.com/v/iphone/home/bx/images/overview/essentials/airtag__furx99ax8rm2_large_2x.jpg" alt="" />
    </div>

    </>
  )
}

export default Essential