import Form from "@/components/form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export default function SignIn() {

    const router = useRouter()

    useEffect(() => {
     if(localStorage.getItem('token')){
        router.push('/')
     }
    }, [])
    

    const onSubmit = async (email, password) => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const res = await response.json()
            console.log(res);
            if (res.token) {
                localStorage.setItem('token', res.token)
                toast.success('Sign in successfully', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push('/')
            }
            else {
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

        } catch (err) {
            console.error("Error in fetching api of signup" + err);
        }
    };
    return (
        <>
            <Form signin={true} onFormSubmit={onSubmit} />
        </>
    )
};