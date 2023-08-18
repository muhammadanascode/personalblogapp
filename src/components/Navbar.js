import Link from 'next/link'
import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Personal Blogging App</h3>
            <div className={styles.child}>
                <p className={styles.username}>Anas Sohail</p>
                <Link className={styles.login} href={""}>Login</Link>
            </div>
        </div>
    )
}

export default Navbar