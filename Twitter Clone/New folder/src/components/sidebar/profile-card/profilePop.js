import React from "react";

function profilePop() {
  return (
    <div className="profilePop flex flex-col w-[252px] whitespace-nowrap ml-[20px] left-2/4 -translate-x-2/4 absolute bg-black text-white py-[20px] rounded-xl -top-[150px]">
      <p className="py-[10px] pl-[15px] hover:bg-[#181919] duration-100">
        Add an existing account
      </p>
      <p className="py-[10px] pl-[15px] hover:bg-[#181919] duration-100">
        Log out from @anonymous
      </p>
    </div>
  );
}

export default profilePop;
