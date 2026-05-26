import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className="flex">
                {
                    showSidebar && <Sidebar />
                }
                <main className="p-5 w-full">
                    {children}
                </main>
            </div>
        </>
    )
}