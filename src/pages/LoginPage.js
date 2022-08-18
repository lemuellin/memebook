import Signup from '../components/Signup';
import Login from '../components/Login';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import camera from "../assets/camera.jpg";

const LoginPage = () => {
  
    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{width: "100vw", height: "100vh"}}>
            <h1>MONOGRAM</h1>
            <div className="d-flex align-items-center justify-content-center gap-3">
                <img src={camera} style={{width: "40vw"}} alt="retro camera"/>
                <div style={{width: "40vw", height: "40vw"}}>
                    <Tabs
                    defaultActiveKey="login"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    justify
                    >
                        <Tab eventKey="login" title="Log In">
                            <Login/>
                        </Tab>
                        <Tab eventKey="signup" title="Sign Up">
                            <Signup/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;