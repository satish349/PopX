
import "./index.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="landing">
                <div className="space"></div>
                <div className="welcome">
                    <h1>Welcome to PopX</h1>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <button onClick={() => navigate("/register")} className="btn btn1">Createm Account</button><br />
                    <button onClick={() => navigate("/login")} className="btn btn2">Already Registered? Login</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;