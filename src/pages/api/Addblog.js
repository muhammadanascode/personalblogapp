import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library
import { newBlog } from '@/services/blogs';
import { getByEmail } from '@/services/users';

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { token, title, description } = req.body
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key

            const { email } = decodedToken; // Extract the email from the decoded payload
            const currentDate = new Date();
            const localDateString = currentDate.toLocaleString();
            const blog = newBlog(localDateString, email, title, description)
            res.status(200).json({ success: blog })
        } catch (error) {
            console.log("Error in adding new Blog" + error)
        }
    }
}