import React from 'react'
import styles from '../styles/Blogs.module.css'
import Image from 'next/image'

const Blog = () => {
    return (
        <div className={styles.container}>
            <h2>Blogs</h2>
            <div className={styles.card}>
                <div className={styles.child}>
                    <Image className={styles.img} width={100} height={100} src={'/boy.jpg'} alt='img' />
                    <div className={styles.titlediv}>
                        <h4 className={styles.title}>A blog title . what does the even loop do like this?</h4>
                        <p className={styles.datename}>Anas Sohail-16th August 2023</p>
                    </div>
                </div>
                <p className={styles.blogdescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <div className={styles.btndiv}>
                    <button type="button" className={`${styles.btn} btn  mt-4`}>Delete</button>
                    <button type="button" className={`${styles.btn} btn  mt-4`}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Blog