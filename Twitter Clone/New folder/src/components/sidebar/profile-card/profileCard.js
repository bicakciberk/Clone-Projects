import More from "./more";
import ProfilePop from "./profilePop";
import { useState } from "react";

function ProfileCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="select-none mt-[30px] p-[12px] flex justify-between w-full rounded-full cursor-pointer relative hover:bg-[#181919] duration-100"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="left flex items-center ">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src="profilepic.jpg"
          alt=""
        />
        <div className="texts flex flex-col ml-[12px] text-[15px]">
          <p className="font-bold">Anonymous</p>
          <p className="text-[#71767b]">@anonymous</p>
        </div>
      </div>
      <More></More>
      {isOpen ? <ProfilePop></ProfilePop> : ""}
    </div>
  );
}

export default ProfileCard;
