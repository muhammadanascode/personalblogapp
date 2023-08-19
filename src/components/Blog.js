import React from 'react'
import styles from '../styles/Blogs.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Blog = ({ title, blogs , username }) => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push('/profile')
    }
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            {blogs?.blogs ? blogs.blogs.map((item) => {
                return <div key={item.date} className={styles.card}>
                    <div className={styles.child}>
                        <Image onClick={handleClick} className={styles.img} width={100} height={100} src={'/boy.jpg'} alt='img' />
                        <div className={styles.titlediv}>
                            <h4 className={styles.title}>{item.title}</h4>
                            <p className={styles.datename}>{username}-{item.date}</p>
                        </div>
                    </div>
                    <p className={styles.blogdescription}>{item.description}</p>
                    {title === "Blogs" ? <div className={styles.btndiv}>
                        <button type="button" className={`${styles.btn} btn  mt-4`}>Delete</button>
                        <button type="button" className={`${styles.btn} btn  mt-4`}>Edit</button>
                    </div>
                        : <button type="button" className={`${styles.btn} btn  mt-4`}>See All Blogs</button>
                    }
                </div>
            }) : ""}
        </div>
    )
}

export default Blog