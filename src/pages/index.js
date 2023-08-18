import Blog from "@/components/Blog";
import Dashboard from "@/components/Dashboard";
import NewBlog from "@/components/NewBlog";

export default function Home() {
  return (
    <>
    <Dashboard title={"Dashboard"}/>
    <NewBlog/>
    <Blog title= {"Blogs"} />
    </>
  )
}
