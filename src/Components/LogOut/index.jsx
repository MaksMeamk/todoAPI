
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
const LogOut = () => {
    const navigate = useNavigate();
    const logOut = () => {
        navigate("/");
        localStorage.clear();
    };
    return (
        <Col>
            <Button type="primary" onClick={() => logOut()}>
                Log out
            </Button>
        </Col>
    )
}

export default LogOut