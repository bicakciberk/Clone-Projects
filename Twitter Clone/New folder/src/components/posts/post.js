import React from "react";
import PostMain from "./postMain";
import Counters from "./counters";
import Right from "./right";

function post({
  userName,
  name,
  userImg,
  time,
  description,
  image,
  commentCount,
  repostCount,
  likeCount,
  view,
}) {
  return (
    <div className="post flex items-start cursor-pointer px-[16px] mb-[10px]">
      <div className="left">
        <img
          className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
          src={userImg}
          alt="userProfileImg"
        />
      </div>
      <div className="right max-w-[520px] ml-[5px]">
        <PostMain
          userName={userName}
          name={name}
          time={time}
          description={description}
        ></PostMain>
        <img
          src={image}
          alt="userPostImage"
          className="w-full rounded-xl mt-[10px]"
        />
        <div className="flex">
          <Counters
            commentCount={commentCount}
            repostCount={repostCount}
            likeCount={likeCount}
            view={view}
          ></Counters>
          <Right></Right>
        </div>
      </div>
    </div>
  );
}

export default post;
