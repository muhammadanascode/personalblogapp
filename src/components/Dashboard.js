import React from 'react'
import styles from "../styles/NewBlog.module.css"

const Dashboard = ({title}) => {
    return (
        <div className={styles.heading}>
            <h1 className={styles.dashboard}>{title}</h1>
        </div>
    )
}

export default Dashboard