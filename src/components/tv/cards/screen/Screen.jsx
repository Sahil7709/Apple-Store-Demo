import React from 'react'
import styles from './Screen.module.css'

function Screen() {
    return (
        <>

            <div className={styles.Every}>
                <div className={styles.Span}>
                    Watch, sing, play, and work out. <br />
                    On the big screen.
                </div>

                <video controls autoPlay muted width="100%">
                    <source src="https://www.apple.com/105/media/us/tv-home/2024/ed6b1c3a-5550-4218-9c96-e11a46281591/anim/services/large_2x.mp4" />
                </video>


            </div>

        </>
    )
}

export default Screen