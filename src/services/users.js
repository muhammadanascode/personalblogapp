import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getByEmail (email) {
    // console.log(email);
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}


export async function SignUp (firstName,lastName, email, password) {
    const found = getByEmail(email);
    if (found) {
        throw new Error("User already exist.");
    }
    const data = getAll();
    data.push({
        id: data.length + 1,
        firstName,
        lastName,
        email,
        password: password
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}