var jwt = require('jsonwebtoken');
import { changePassword, getByEmail } from '@/services/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { token, oldpass, newpass } = req.body;
      
      // Decode the token to retrieve the payload
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
      const { email } = decodedToken; // Extract the email from the decoded payload
      
      const user = getByEmail(email);

      if (user) {
        // Compare the old password with the stored password (if needed)
        // console.log(user.password , "--" , newpass);
        // console.log(typeof(user.password) , typeof(newpass))
        if (user.password == oldpass) {
          // Update the password
          changePassword(email, newpass);
          
          res.status(200).json({ success: true, message: 'Password changed successfully' });
        } else {
          res.status(401).json({ success: false, error: 'Invalid Credentials' });
        }
      } else {
        res.status(404).json({ success: false, error: 'No User Found' });
      }
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ success: false, error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
