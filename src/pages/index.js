import Blog from "@/components/Blog";
import Dashboard from "@/components/Dashboard";
import NewBlog from "@/components/NewBlog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({setUserName}) {

  const router = useRouter()
  const [blogs , setBlogs] = useState([])

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

  async function fetchBlogs(){
    const response = await fetch("/api/readblogs" , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token:localStorage.getItem("token")})
    } )

    const res = await response.json()
    console.log(res);
    setBlogs(res)
  }
 
  useEffect(() => {
  if(!localStorage.getItem('token')){
    router.push('/login')
  }
  else{
   api()
   fetchBlogs()
  } 
  }, [])
  

  return (
    <>
      <Dashboard title={"Dashboard"} />
      <NewBlog />
      <Blog blogs={blogs} title={"Blogs"} />
    </>
  );
}
