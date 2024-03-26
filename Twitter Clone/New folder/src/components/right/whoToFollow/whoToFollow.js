import whoToFollowJSON from "./whoToFollow.json";
import Account from "./account";
import ShoweMore from "../showeMore";

function whoToFollow() {
  return (
    <div className="flex flex-col items-start mt-[20px] bg-[#16181c] py-[15px] rounded-2xl">
      <p className="text-[#e7e9ea] font-bold text-[20px] px-[15px] mb-[15px]">
        Who to follow
      </p>
      {whoToFollowJSON.map((item) => {
        return (
          <Account
            userName={item.username}
            name={item.name}
            img={item.img}
          ></Account>
        );
      })}
      <ShoweMore></ShoweMore>
    </div>
  );
}

export default whoToFollow;
