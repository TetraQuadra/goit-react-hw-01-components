import React from 'react'
import styles from './Profile.module.css'

function Profile() {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
                <img src="" alt="" />
            </div>
            <div className={styles.profileStats}>
                <div className={styles.stat}></div>
                <div className={styles.stat}></div>
                <div className={styles.stat}></div>
            </div>
        </div>
    )
}

export default Profile