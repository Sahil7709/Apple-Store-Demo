import React from 'react'
import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.Card}>
            <video controls autoPlay muted width="100%">
                <source src="https://www.apple.com/105/media/us/services/2024/a8e4c2f2-5eaa-476d-b419-e6faf9237070/anim/sizzle/large.mp4" />
            </video>
        </div>
    )
}

export default Card 