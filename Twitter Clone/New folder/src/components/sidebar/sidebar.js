import List from "./list/list";
import Button from "./button";
import X from "./list/x";
import ProfileCard from "./profile-card/profileCard";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Sidebar() {
  useEffect(() => {
    gsap.to(".sidebar", {
      scrollTrigger: {
        trigger: ".sidebar",
        start: "top top",
        pin: true,
        end: () => `+=${document.querySelector("body").offsetHeight}`,
      },
    });
  }, []);
  return (
    <div className="sidebar pr-[25px] flex flex-col items-start justify-between h-full max-w-[252px]">
      <div className="top">
        <div className="flex items-center justify-center hover:bg-[#181919] h-[54px] w-[54px] rounded-full">
          <X className="fill-white h-[50px] w-[30px]"></X>
        </div>
        <List></List>
        <Button
          text="Post"
          className="select-none rounded-full mt-[10px] duration-100 py-[16px] w-[217px] text-[17px] font-bold bg-blue hover:bg-[#1a8cd8]"
        ></Button>
      </div>
      <ProfileCard></ProfileCard>
    </div>
  );
}

export default Sidebar;
