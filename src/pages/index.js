import Blog from "@/components/Blog";
import Dashboard from "@/components/Dashboard";
import NewBlog from "@/components/NewBlog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({setUserName}) {

  const router = useRouter()

  async function api(){
    const response = await fetch('/api/username',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token:localStorage.getItem('token')})
    })

    const res = await response.json()
    const name = res.firstName + res.lastName
    setUserName(name)
  }
 
  useEffect(() => {
  if(!localStorage.getItem('token')){
    router.push('/login')
  }
  else{
   api()
  } 
  }, [])
  

  return (
    <>
      <Dashboard title={"Dashboard"} />
      <NewBlog />
      <Blog title={"Blogs"} />
    </>
  );
}
