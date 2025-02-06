import React from 'react'
import styles from './Every.module.css'

function Every() {
    return (
        <>

            <div className={styles.Every}>
                <div className={styles.Span}>
                    Every reason to turn your house <br />into a smart home.
                </div>

                <div className={styles.Image}>
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/smart_control__dsa6v8m1pp0m_large_2x.jpg" alt="" />
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/smart_connect__d8o6agoqfh0m_large_2x.jpg" alt="" />
                    <img src="https://www.apple.com/v/tv-home/o/images/overview/security_and_privacy__bzlguj2x29jm_large_2x.jpg" alt="" />
                </div>
            </div>

        </>
    )
}

export default Every