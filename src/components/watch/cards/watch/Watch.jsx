import React from 'react'
import styles from './Watch.module.css'

function Watch() {
    return (
        <>
            <h2>Mac</h2>

            <section className={styles.Section}>
                <div className={styles.exploreSection}>
                    <span> Explore Mac </span>
                    <ul>
                        <li>Explore All Watches</li>
                        <li> MacBook Air</li>
                        <li> MacBook Pro</li>
                        <li>iMac</li>
                        <li> Mac mini</li>
                        <li>Mac Studio</li>
                        <li> Mac Pro</li>
                        <li> Displays</li>
                        <li> Compare Mac</li>
                        <li>Switch from PC to Mac</li>
                    </ul>

                </div>
                <div className={styles.ShopSection}>
                    <span>Shop Apple Watch</span>
                    <ul>
                        <li>Shop Mac</li>
                        <li>Help Me Choose</li>
                        <li>Mac Accessories</li>
                        <li>iMac</li>
                        <li>Apple Trade In</li>
                        <li>Financing</li>
                    </ul>

                </div>
                <div className={styles.MoreSection}>

                    <span>More from Apple Watch</span>
                    <ul>
                        <li>Mac Support</li>
                        <li>AppleCare+for Mac</li>
                        <li>macOS Sequoia</li>
                        <li>Apple Intelligence</li>
                        <li>Apps by Apple</li>
                        <li>Continuity</li>
                        <li>iCloud+</li>
                        <li>Mac for Business</li>
                        <li>Education</li>

                    </ul>

                </div>
            </section>
        </>
    )
}

export default Watch