import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

export function newBlog (email,title,description){
    const data = JSON.parse( fs.readFileSync(filePath))
    data.push({
        email,
        title,
        description
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
    return "Blog Added"
}

export function readBlog(email){
    const data = JSON.parse( fs.readFileSync(filePath))
    const blogs = data.filter((item)=>item.email == email)
    return blogs
}