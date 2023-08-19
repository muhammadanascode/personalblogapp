import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ session, Component, pageProps }) {
  const [username , setUsername] = useState("")
  function setUserName(name){
    setUsername(name)
  }
  return (
    <>
        <Navbar username = {username} />
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        <Component setUserName = {setUserName}  {...pageProps} />
    </>
  )
}
