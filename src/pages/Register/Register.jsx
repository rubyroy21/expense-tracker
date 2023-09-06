/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [userRole, setUserRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "https://localhost:7020/api/Authentication/Register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            phoneNo: phoneNo,
            passWord: password,
            userRole: userRole,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log(data, "Response");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <div className="sign-up">Sign Up</div>
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
        Already have an account?
        <Link className="link-login" to="/">
          &nbsp;Log In
        </Link>
      </div>

      <div className="container-signup">
        <div className="column">
          <div className="input-fields">
            <form autoComplete="off">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your User Name"
                id="input-fields"
                required
              />
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter your Phone Number"
                id="input-fields"
                required
              />
              <input
                type="email"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                placeholder="Enter your User Role"
                id="input-fields"
                required
              />
              {/* <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
                error={!isValid}
                helperText={!isValid ? "Invalid email address" : ""}
              /> */}

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                id="input-fields"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </div>
            </form>
            <br />
            <div className="signup-btn">
              <button id="signup-button" onClick={handleRegister}>
                Register
              </button>
            </div>
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
      <Footer />
    </div>
  );
};

export default Register;
