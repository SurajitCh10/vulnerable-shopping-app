import React, { useEffect } from "react";
import Logo from "./Logo";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "universal-cookie";

function Landing() {
  useEffect(() => {
    document.title = "Landing";
  });

  const cookies = new Cookies();
  const navigate = useNavigate();

  const token = cookies.get('token');

    useEffect(() => {

      setInterval(() => {
        
        if(!cookies.get('token')) {
          
          Axios.post('http://localhost:4000/logout', {
            token
          }).then(() => {
            cookies.remove('token');
            navigate("/login");
            window.location.reload();
          });

        }
    }, 1000);
  }, []);

  return (
    <>
      <Logo />
      <div className="d-flex justify-content-center pt-3 mt-3">
        <h2>Welcome Admin to C-Kart!</h2>
      </div>

      <div className="row pt-3 mt-3">
        <div className="d-flex justify-content-center">
          <Link to="/menu">
            <Button
              style={{ fontSize: "22px" }}
              size="large"
              variant="contained"
            >
              Go to Menu
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
