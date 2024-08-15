import React from 'react'
import styles from "@/components/loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading news, please wait...</p>
        </div>
    )
}

export default Loading