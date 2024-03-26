import Button from "../../sidebar/button";
function account({ userName, name, img }) {
  return (
    <div className="px-[15px] flex items-center justify-between cursor-pointer w-full py-[16px] hover:bg-[#1d1f23] duration-100">
      <div className="left flex items-center">
        <img
          className="h-[44px] w-[44px] rounded-md"
          src={img}
          alt="userProfileImg"
        />
        <div className="flex items-start flex-col text-[15px] ml-[10px]">
          <p className="name">{name}</p>
          <p className="username text-[#71767b]">@{userName}</p>
        </div>
      </div>
      <Button
        text="Follow"
        className="select-none rounded-full text-[14px] duration-100 w-[78px] h-[32px] font-bold text-[#0a0a0a] bg-[#eff3f4] hover:bg-[#d7dbdc]"
      ></Button>
    </div>
  );
}

export default account;
