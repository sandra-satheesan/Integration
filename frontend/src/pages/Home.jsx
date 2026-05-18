import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            navigate('/login')
        }
    }, []);
    return (
        <>
            <h1>Home</h1>
        </>
    )
}