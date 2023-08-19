import { getByEmail } from '@/services/users';
import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library

export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { token } = req.body;
            // console.log(token);

            // Decode the token to retrieve the payload
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
            // console.log(decodedToken);
            const { email } = decodedToken; // Extract the email from the decoded payload
            const user = getByEmail(email)
            // console.log(firstName,lastName);

            res.status(200).json({ firstName: user.firstName, lastName: user.lastName }); // Send the email back in the response
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}
