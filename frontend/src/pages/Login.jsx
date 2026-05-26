import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)

            });
            const data = await response.json();

            console.log(data);

            if (data.message)
                alert(data.message);
            else {
                alert("Login successful");
                sessionStorage.setItem("accessToken", data.token);
                console.log(sessionStorage.getItem("accessToken"));
                console.log(data.token);
                navigate('/home');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                <h1 className="text-3x1 font-bold mb-6 text-center">Login Page</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} className="border p-3 rounded" required />
                    <input type="password" name="password" placeholder="Enter password" onChange={handleChange} className="border p-3 rounded" required />
                    <button type="Submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    )
}