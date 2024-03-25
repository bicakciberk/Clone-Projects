import React from "react";
import Searchbar from "./searchbar";
import Subscribe from "./subscribe";
import TrendsForYou from "./trendsForYou/trendsForYou";

function right() {
  return (
    <div className="pl-[25px] pt-[5px] w-[350px]">
      <Searchbar></Searchbar>
      <Subscribe></Subscribe>
      <TrendsForYou></TrendsForYou>
    </div>
  );
}

export default right;
