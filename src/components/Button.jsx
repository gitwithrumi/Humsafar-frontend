import React from "react";

function Button(props) {
  return (
    <div className="m-2">
      <button className="group px-10 py-3 text-base font-normal font-Cabin rounded-sm bg-primary text-textLight flex items-center hover:bg-sectionBackground shadow-md">
        {props.ButtonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.1em"
          height="1.1em"
          viewBox="0 0 15 15"
          className="fill-primary bg-white border rounded-full p-[2px] ml-3 group-hover:fill-sectionBackground"
        >
          <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path>
        </svg>
      </button>
    </div>
  );
}

export default Button;
