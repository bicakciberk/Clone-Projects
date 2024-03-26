import React from "react";
import Searchbar from "./searchbar";
import Subscribe from "./subscribe";
import TrendsForYou from "./trendsForYou/trendsForYou";
import WhoToFollow from "./whoToFollow/whoToFollow";
import ShoweMore from "./showeMore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Right() {
  useEffect(() => {
    gsap.to(".right", {
      scrollTrigger: {
        trigger: "right",
        start: `top top`,
        pin: true,
      },
    });
  }, []);
  return (
    <div className="right relative pl-[25px] pt-[5px] w-[350px]">
      <Searchbar></Searchbar>
      <Subscribe></Subscribe>
      <TrendsForYou></TrendsForYou>
      <WhoToFollow></WhoToFollow>
    </div>
  );
}

export default Right;
