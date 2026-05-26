import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function MyBookings() {
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            navigate('/login')
        }
    }, []);
    return (
        <>
            <Navbar />
            <h1>My Bookings</h1>
        </>
    )
}