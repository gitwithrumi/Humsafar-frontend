import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div
        id="navbar"
        className="flex items-center justify-between p-5 bg-white fixed w-screen h-20 shadow-lg"
      >
        <div id="nav-1">
          <div className="logo">
            {/* <img src="" alt="HumSafar" /> */}
            <h1 className="text-2xl font-Cabin">HumSafar</h1>
          </div>
        </div>
        <div id="nav-2" className="flex items-center">
          <a href="" className="flex items-center group ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 36 36"
              className="fill-secondary group-hover:fill-primary"
            >
              <path
                d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
                className="clr-i-solid clr-i-solid-path-1"
              ></path>
              <circle
                cx={18}
                cy={10}
                r={7}
                className="clr-i-solid clr-i-solid-path-2"
              ></circle>
              <path fill="none" d="M0 0h36v36H0z"></path>
            </svg>{" "}
            <span className="px-1 text-secondary text-lg font-normal font-Cabin group-hover:text-primary">
              {" "}
              Account{" "}
            </span>
          </a>
          <Button ButtonText="Sign Up" />
        </div>
      </div>
    </>
  );
};

export default Header;
