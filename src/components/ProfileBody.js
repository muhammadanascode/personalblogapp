import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "../styles/Profile.module.css"
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';

const ProfileBody = ({ }) => {
    const router = useRouter()
    const [user, setUser] = useState("")
    const [oldpass, setOldpass] = useState("")
    const [newpass, setNewpass] = useState("")
    const [repass, setRepass] = useState("")

    async function api() {
        const response = await fetch('/api/username', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: localStorage.getItem('token') })
        })

        const res = await response.json()
        const name = res.firstName + res.lastName
        setUser(name)
    }
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            router.push('/login')
        }
        else {
            api()
        }
    }, [])


    const handleChange = (e) => {
        if (e.target.name === "old") {
            setOldpass(e.target.value)
        }
        if (e.target.name === "new") {
            setNewpass(e.target.value)
        }
        if (e.target.name === "re") {
            setRepass(e.target.value)
        }
    }

    async function apicall() {
        const response = await fetch('/api/changepassword', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token:localStorage.getItem("token") ,  oldpass, newpass, repass })
        })
        const res = await response.json()
        console.log(res);
        return res.success;
    }

    const handleClick = () => {
        if (newpass != repass) {
            toast.error('New password and confirm passwords should be equal', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            
            if(apicall()){
                toast.success('Password Updated Successfully', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.removeItem("token")
                router.push('./login')
            }
            else{
                toast.error('invalid credentials', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.imgdiv}>
                    <Image className={styles.img} width={300} height={300} src={'/boy.jpg'} alt='profileimg' />
                </div>
                <div className={styles.passdiv}>
                    <h5>{user}</h5>
                    <h6>Password</h6>
                    <div className="mb-3">
                        <input onChange={handleChange} value={oldpass} name='old' type="password" className="form-control" id="oldpassword" placeholder="Old password" />
                    </div>
                    <div className="mb-3">
                        <input onChange={handleChange} value={newpass} name='new' type="password" className="form-control" id="newpassword" placeholder="New Password" />
                    </div>
                    <div className="mb-3">
                        <input onChange={handleChange} value={repass} name='re' type="password" className="form-control" id="re-enter" placeholder="Re-enter new password" />
                    </div>
                    <button onClick={handleClick} type="button" className={`${styles.btn} btn  mt-4`}>Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody