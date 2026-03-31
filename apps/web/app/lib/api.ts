// C:\Users\vivek_laxvnt1\Desktop\projects\NestNext\apps\web\app\lib\api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true, // Important for cookies
  headers: {
    "Content-Type": "application/json",
  },
});