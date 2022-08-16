import Signup from '../components/Signup';
import Login from '../components/Login';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
  
    return(
        <div>
            <Container className="d-flex align-items-center justify-content-center"
                style={{minheight: "100vh"}}
            >
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Login/>
                    <Signup/>
                </div>
            </Container>
        </div>
    );
}

export default LoginPage;