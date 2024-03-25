import Button from "../sidebar/button";
function subscribe() {
  return (
    <div className="flex flex-col items-start bg-[#16181c] p-[15px] rounded-2xl mt-[20px]">
      <p className="text-[#e7e9ea] font-bold text-[20px]">
        Subscribe to Premium
      </p>
      <p className="text-[#e7e9ea] text-[15px] mt-[10px]">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <Button
        text="Subscribe"
        className="select-none rounded-full mt-[10px] duration-100 px-[16px] py-[5px] text-[17px] font-bold bg-blue hover:bg-[#1a8cd8]"
      ></Button>
    </div>
  );
}

export default subscribe;
