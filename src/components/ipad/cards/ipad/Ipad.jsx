import React from 'react'
import styles from './Ipad.module.css'

function Ipad() {
    return (
        <>
            <h2 className={styles.Ipad}>Ipad</h2>

            <section className={styles.Section}>

                <div className={styles.leftSection}>

                    <div className={styles.section}>

                        <h3>Explore iPad</h3>
                        <ul>
                        <li>Explore All iPad</li>
                        <li> MacBook Air</li>
                        <li> MacBook Pro</li>
                        <li>iMac</li>
                        <li> Mac mini</li>
                        <li>Mac Studio</li>
                        <li> Mac Pro</li>
                        <li> Displays</li>
                        <li> Compare iPad</li>
                        <li>Switch from iPhone to iPad</li>
                    </ul>
                    </div>
                </div>

                <div className={styles.centerSection}>

                    <div className={styles.section}>
                        <h3>Shop iPad</h3>
                        <ul>
                        <li>Shop IPad</li>
                        <li>Help Me Choose</li>
                        <li>Mac Accessories</li>
                        <li>iMac</li>
                        <li>Apple Trade In</li>
                        <li>Financing</li>
                    </ul>
                    </div>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.section}>
                        <h3>More from iPad</h3>
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
                </div>
            </section>
        </>
    )
}

export default Ipad