import Image from 'next/image'
import React from 'react'
import styles from "../styles/Profile.module.css"


const ProfileBody = () => {
    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.imgdiv}>
                    <Image className={styles.img} width={300} height={300} src={'/boy.jpg'} alt='profileimg' />
                </div>
                <div className={styles.passdiv}>
                    <h5>Anas Sohail</h5>
                    <h6>Password</h6>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Old password" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="New Password" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Re-enter new password" />
                    </div>
                    <button type="button" className={`${styles.btn} btn  mt-4`}>Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody