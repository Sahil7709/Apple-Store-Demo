import React from 'react'
import styles from './Around.module.css'

function Around() {
    return (
        <>

            <div className={styles.Every}>
                <div className={styles.Span}>
                Accessories. Around your home <br />and across your devices.
                </div>

                <div className={styles.Image}>
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/lighting__bwpnaru6q1w2_large_2x.jpg" alt="" />
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/security__dbctk5zp4gcy_large_2x.jpg" alt="" />
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/comfort__bnwbuouyz10i_large_2x.jpg" alt="" />
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/entry__bfom4g78kbg2_large_2x.jpg" alt="" />
                </div>
            </div>

        </>
    )
}

export default Around