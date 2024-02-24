import React, { useEffect } from "react";
import { NavBarComponents, PreventComponents } from "../components";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProfile();
  //   })();
  // }, []);

  return (
    <PreventComponents check={!localStorage.getItem("auth")} path={"/"}>
      <div className="container mx-auto h-screen">
        <div className="w-[80%] mx-auto h-full">
          <NavBarComponents />

          <Outlet />
        </div>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
