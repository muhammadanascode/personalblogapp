import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');

export function getAll() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getByEmail(email) {
  const data = getAll();
  return data.find((p) => p.email.toLowerCase() === email.toLowerCase());
}

export async function SignUp(firstName, lastName, email, password) {
  const found = getByEmail(email);
  if (found) {
    throw new Error('User already exists.');
  }
  const data = getAll();
  data.push({
    id: data.length + 1,
    firstName,
    lastName,
    email,
    password: password,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}

export async function changePassword(email, newPassword) {
  const data = getAll();
  const userIndex = data.findIndex((p) => p.email.toLowerCase() === email.toLowerCase());

  if (userIndex !== -1) {
    data[userIndex].password = newPassword;
    fs.writeFileSync(filePath, JSON.stringify(data));
    
  } else {
    throw new Error('User not found.');
  }
}
