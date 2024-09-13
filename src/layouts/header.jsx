/* eslint-disable no-unused-vars */
import React from "react";
import MainLogo from "../assets/logo.png";
export default function Header() {
  return (
    <div className="container">
      <div className="flex justify-start py-[38px]">
        <img src={MainLogo} width={150} height={24} />
      </div>
    </div>
  );
}
