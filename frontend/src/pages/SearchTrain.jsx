import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
export default function SearchTrain() {
    const navigate = useNavigate();
    const [trains, setTrains] = useState([]);
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            navigate('/login')
        }
        fetch("http://localhost:5000/trains")
            .then((res) => res.json())
            .then((data) => setTrains(data))
    }, []);

    const handleBook = async (trainId) => {
        const token = sessionStorage.getItem("accessToken");
        const response = await fetch("http://localhost:5000/book",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ trainId })
            }
        );
        const data = await response.json;
        if (data.message)
            alert(data.message);
        else {
            alert("Login successful");
        }
    }

    return (
        <>
            <Layout>
                <h1>Search Trains</h1>
                {
                    trains.map((train) => (
                        <div key={train.id} className="border p-4 rounded mb-4">
                            <h3>{train.train_name}</h3>
                            <p> {train.source} → {train.destination} </p>
                            <p> Departure: {train.departure_time}</p>
                            <p> Arrival: {train.arrival_time}</p>
                            <p> Seats: {train.available_seats}</p>
                            <p> Price: {train.price}</p>
                            <button onClick={() => handleBook(train.id)}
                                className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600">Book Ticket</button>
                        </div>

                    )
                    )}

            </Layout>
        </>
    )
}