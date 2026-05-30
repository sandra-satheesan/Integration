import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <>
            <div className="w-[220px] h-screen bg-gray-800 flex flex-col gap-6 p-5">
                <Link to="/home" className="text-white text-lg hover:text-yello-300">Home</Link>
                <Link to="/search" className="text-white text-lg hover:text-yello-300">Search Trains</Link>
                <Link to="/book" className="text-white text-lg hover:text-yello-300">My Bookings</Link>
                <Link to="/home" className="text-white text-lg hover:text-yello-300">Home</Link>
            </div>
        </>
    );
}