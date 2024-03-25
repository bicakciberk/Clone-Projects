import Emoji from "./emoji";
import Gif from "./gif";
import Img from "./img";
import Location from "./location";
import Poll from "./poll";
import Schedule from "./schedule";
import Button from "../../sidebar/button";

function emojiList() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Img></Img>
        <Gif></Gif>
        <Poll></Poll>
        <Emoji></Emoji>
        <Schedule></Schedule>
        <Location></Location>
      </div>
      <Button
        text="Post"
        className="select-none rounded-full duration-100 py-[4px] w-[66px] text-[15px] font-bold bg-blue hover:bg-[#1a8cd8]"
      ></Button>
    </div>
  );
}

export default emojiList;
