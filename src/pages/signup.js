import Form from "@/components/form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export default function SignUp() {
    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const onSubmit = async (firstName, lastName, email, password) => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ firstName, lastName, email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const res = await response.json()
            if (res.success) {

                toast.success('Sign Up successfully', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                router.push('/login')
            }
            else {
                toast.error('Invalid credentials', {
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
            <Form signin={false} onFormSubmit={onSubmit} />
        </>)
};