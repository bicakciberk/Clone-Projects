import React from "react";

function postMain({ userName, name, time, description }) {
  return (
    <div className="postMain">
      <div className="flex text-[15px]">
        <p className="name font-bold">{name}</p>
        <p className="username text-[#71767b] ml-[5px]">@{userName}</p>
        <p className="time text-[#71767b] ml-[5px]">- {time}</p>
      </div>
      <p className="description max-w-[600px]">{description}</p>
    </div>
  );
}

export default postMain;
