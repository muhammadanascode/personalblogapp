import React, { useState } from 'react'
import styles from "../styles/NewBlog.module.css"

const NewBlog = () => {

    const [title , setTitle] = useState()
    const [description , setDescription] = useState()

    const handleChange = (e)=>{

        if(e.target.name === "title"){
            setTitle(e.target.value)
        }
        if(e.target.name === "description"){
            setDescription(e.target.value)
        }
    }

     const handleClick = async ()=>{
        const response = await fetch('/api/Addblog' , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            } , 
            body:JSON.stringify({token:localStorage.getItem("token") , title,description})
        })

        const res = await response.json()
        console.log(res);
    }

    return (
        <div className={styles.container}>
            <div className="mb-3">
                <input onChange={handleChange} type="email" name='title' className="form-control" id="title" placeholder="New Blog Title" />
            </div>
            <div className="mb-3">
                <textarea onChange={handleChange} name='description' placeholder='What is in your mind?' className="form-control" id="description" rows="3"></textarea>
                <button onClick={handleClick} type="button" className={`${styles.btn} btn  mt-4`}>Add Blog</button>
            </div>
        </div>
    )
}

export default NewBlog