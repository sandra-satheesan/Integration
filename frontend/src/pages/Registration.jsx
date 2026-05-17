import { useState } from "react";
export default function Registration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);

            alert("User Registered Successfully");
        } catch (err) {
            console.log(err);
        }

    };


    return (
        <>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>Email:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>Password:
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
