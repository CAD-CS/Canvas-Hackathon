import { useState } from 'react';
import './App.css';
import FrontPage from "./Pages/FrontPage.jsx";
import AnalyticsPage from "./Pages/AnalyticsPage.jsx";
import canvas_logo from "./assets/logo.png";

function App() {
    const [page, setPage] = useState("Front"); // Default to "Front" page

    return (
        <>
            {/*<h1>Canvas Plug-in ._.</h1>*/}
            <img src={canvas_logo}></img>
            <button onClick={() => setPage("Front")}>Professor View</button>
            <button onClick={() => setPage("Analytics")}>Student View</button>


            {/* Buttons to switch between FrontPage and AnalyticsPage */}


            {/* Conditional rendering based on the `page` state */}
            {page === "Front" && <FrontPage />}
            {page === "Analytics" && <AnalyticsPage />}
        </>
    );
}

export default App;
