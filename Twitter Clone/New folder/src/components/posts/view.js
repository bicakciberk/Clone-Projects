import React from "react";

function view({ children }) {
  return (
    <div className="flex items-center fill-[#71767b] text-[#71767b] hover:text-red hover:fill-red duration-100">
      <div className="w-[35px] h-[35px] rounded-full hover:bg-[#200914] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[19px] h-[19px]"
        >
          <g>
            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
          </g>
        </svg>
      </div>
      <p className="text-[13px]">{children}</p>
    </div>
  );
}

export default view;
