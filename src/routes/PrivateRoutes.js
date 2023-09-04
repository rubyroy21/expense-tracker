import { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivateRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(login, "Login");
    if (!login) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};
export default PrivateRoutes;
