import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleRegister = () => {
    // console.log("function called");
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: email,
    //     fname: fname,
    //     lname: lname,
    //     pwd: password,
    //   }),
    // };
    // fetch("http://dev.xlrt.ai:8090/tenants/user/signup", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data, "data");
    //   })
    //   .catch((err) => console.log(err));
    console.log(
      {
        firstName: fname,
        lastName: lname,
        Email: email,
        Password: password,
      },
      "Register Credentials"
    );
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Check if the entered email matches the regex pattern
    setIsValid(emailRegex.test(newEmail));
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
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                InputProps={{
                  style: { width: "300px" },
                }}
                autoComplete="on"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <TextField
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
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  style: { width: "300px" },
                }}
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
