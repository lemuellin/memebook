import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/NavBar";

const RouteSwitch = () => {
    return(
        
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/upload' element={<UploadPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;