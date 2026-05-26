import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Registration() {
    const navigate = useNavigate();
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

            if (data.message)
                alert(data.message);
            else
                alert("Registration successful");
        } catch (err) {
            console.log(err);
        }

    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Registration Form
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        className="border p-3 rounded"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        className="border p-3 rounded"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        className="border p-3 rounded"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>

                </form>

                <p className="mt-5 text-center">
                    Already a user?
                </p>

                <div className="flex justify-center mt-3">

                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className="text-blue-500 hover:underline"
                    >
                        Login Page
                    </button>

                </div>

            </div>

        </div>

    )
}
