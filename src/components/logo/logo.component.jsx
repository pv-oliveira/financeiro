import React from "react";
import Tilt from "react-parallax-tilt";
import maanaim from "../../assets/maanaim.png";
// import { useNavigate } from "react-router-dom";

import "./logo.styles.scss";

const Logo = () => {
  // const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="logo-container">
      <div
       onClick={onSubmit}
       className="tilt"
       options={{ max: 55 }}
    //    style = {{ height: 150, width: 150 }}
       >
        <div className="tilt-inner">
          <img alt="logo" src={maanaim} onClick={onSubmit}  />
        </div>
      </div>
    </div>
  );
};

export default Logo;
