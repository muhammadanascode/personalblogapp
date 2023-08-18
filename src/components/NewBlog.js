import React from 'react'
import styles from "../styles/NewBlog.module.css"

const NewBlog = () => {
    return (
        <div className={styles.container}>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="New Blog Title" />
            </div>
            <div className="mb-3">
                <textarea placeholder='What is in your mind?' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" className={`${styles.btn} btn  mt-4`}>Primary</button>
            </div>
        </div>
    )
}

export default NewBlog