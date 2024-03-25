import React from "react";

function repost({ children }) {
  return (
    <div className="flex items-center text-[#71767b] hover:text-green fill-[#71767b] hover:fill-green duration-100">
      <div className="w-[35px] h-[35px] rounded-full hover:bg-[#071a14] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[19px] h-[19px]"
        >
          <g>
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
          </g>
        </svg>
      </div>
      <p className="text-[13px]">{children}</p>
    </div>
  );
}

export default repost;
