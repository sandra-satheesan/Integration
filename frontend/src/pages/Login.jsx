import { useState } from 'react'
export default function Login() {
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
            else
                alert("Login successful");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="email" name="email" onChange={handleChange} required />
                </label>
                <label>Password:
                    <input type="password" name="password" onChange={handleChange} required />
                </label>
                <button type="Submit">Login</button>
            </form>
        </>
    )
}