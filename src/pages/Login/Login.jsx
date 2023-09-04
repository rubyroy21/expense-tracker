import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import "../Register/Register.css";
import "./Login.css";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState(null);
  const [jwtToken, setJwtToken] = useState();
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // fetch("https://dev.xlrt.ai/auth-api/gatekeeper/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password: password,
    //     userid: userid,
    //   }),
    // })
    //   .then((response) => {
    //     localStorage.setItem(
    //       "authorization",
    //       response.headers.get("authorization")
    //     );
    //     localStorage.setItem("username", userid);
    //     setJwtToken(
    //       response.headers
    //         .get("authorization")
    //         .split(/(\s+)/)
    //         .filter((e) => e.trim().length > 0)[1]
    //     );
    //     if (!response.ok) {
    //       throw new Error("Login request failed");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setResponse(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    console.log({ Email: email, Password: password }, "Login Credentials");
    setStatus(true);
  };

  return (
    <div className="main-div">
      <div className="signup-navbar">
        <div className="web-logo">
          <img
            src={require("../../images/logo/Expense1.png")}
            alt=""
            style={{
              height: "170px",
              width: "210px",
            }}
          />
        </div>
        <div className="sign-up">Login</div>
        <div className="close-icon">
          <Link className="close-icon-link" to="/">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/kqt/close-116.png"
              alt=""
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="second-text-line">
        Not have an account
        <Link className="link-login" to="/register">
          &nbsp;Sign up
        </Link>
      </div>
      <div className="container-signup">
        <div className="column">
          <div className="input-fields">
            <form autoComplete="off" onSubmit={handleLogin}>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="standard"
                autoComplete="current-password"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </div>
              <br />
              <div className="forgot-password-1">
                <div className="forgot-password">Forgot Password?</div>
              </div>
              <div className="signup-btn">
                <button id="signup-button">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="column">
          <div className="signup-platform">
            <div className="google-signup">
              <div className="google-logo">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                  className="google-png"
                />
              </div>
              <div className="google-text">Continue with Google</div>
            </div>
            <div className="google-signup">
              <div className="google-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                  alt=""
                  className="linkedIn-png"
                />
              </div>
              <div className="google-text">Continue with LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Login;
