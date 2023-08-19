import { SignUp } from "@/services/users";
var CryptoJS = require("crypto-js");

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(404).send();
    }
    const { firstName, lastName, email, password } = req.body;
    try {
        let encryptedpassword = CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString()
        SignUp(firstName, lastName, email, encryptedpassword);
        
        res.status(201).json({ success: "SignUp successful" });
    } catch (err) {
        res.status(400).json({ message: err });
    }

}
