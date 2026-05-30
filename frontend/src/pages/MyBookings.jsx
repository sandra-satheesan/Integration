import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
export default function MyBookings() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            navigate('/login');
            return;
        }

        fetch("http://localhost:5000/book")
            .then((res) => res.json())
            .then((data) => setBookings(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Layout>
                <h1>My Bookings</h1>
                <ul>
                    {bookings.length === 0 ? (
                        <li>No bookings found.</li>
                    ) : (
                        bookings.map((booking) => (
                            <li key={booking.id ?? booking._id ?? JSON.stringify(booking)}>
                                {booking.name ?? JSON.stringify(booking)}
                            </li>
                        ))
                    )}
                </ul>
            </Layout>
        </>
    );
}