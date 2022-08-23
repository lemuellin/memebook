import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const RouteSwitch = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;