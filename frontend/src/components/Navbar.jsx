import { useNavigate } from "react-router-dom";
//import logo from "../assets/vite.svg";

export default function Navbar({ showSidebar, setShowSidebar }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
        navigate('/login');
    }

    return (
        <>
            <nav className="flex items-center justify-between bg-gray-900 text-white px-5 py-3">
                <div className="flex items-center justify-between gap-15">
                    <button onClick={() => setShowSidebar(!showSidebar)} className="text-2x1">☰</button>
                    <h3>logo</h3>
                    <h2>Train Booking System</h2>
                </div>
                <button onClick={handleLogout} className="px-4 py-2 rounded hover:bg-red-600">Logout</button>
            </nav>
        </>
    )
}