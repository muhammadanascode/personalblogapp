var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
import { getByEmail } from "@/services/users";

// Database connection
export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const  email  = req.body.email
            // console.log(email);
            const user = getByEmail(email)
            if (user) {
                var bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
                var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                // console.log("Decrypted Password is     :  " + decryptedPassword);
                if (decryptedPassword === req.body.password) {
                    var token = jwt.sign(user, process.env.JWT_SECRET, {
                        expiresIn: "2d"
                    });
                    // console.log(token);
                    res.status(200).json({ success: true, token })
                }
                else {
                    res.status(401).json({ success: false, error: "InValid Credentials" })
                }

            }
            else {
                res.status(404).json({ success: false, error: "No User Found" })
            }
        } catch (error) {
            console.log("Error in creating User" + error);
        }
    }
}



