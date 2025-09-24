import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function AppRoutes() {
    return( 
        <main>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </main>
    )
}

export default AppRoutes