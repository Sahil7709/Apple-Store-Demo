import React from 'react'
import styles from './Air.module.css'

function Air() {
  return (
    <>
    <div className={styles.body}>

    <div className={styles.video}>
          <video autoPlay muted width="100%">
            <source src="https://www.apple.com/105/media/us/ipad-air/2024/df9239d9-b05f-4fc6-9f57-8ce5c168833f/anim/hero/large_2x.webm" />
          </video>
        </div>
      </div>
    </>
  )
}

export default Air