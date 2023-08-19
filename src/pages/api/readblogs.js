import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library
import { readBlog } from '@/services/blogs';

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { token } = req.body
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key

            const { email } = decodedToken; // Extract the email from the decoded payload
            const blogs = readBlog(email)
            res.status(200).json({blogs })
        } catch (error) {
          console.log("Error in adding new Blog" + error)
        }
    }
}