import React from "react";
import Top from "./top/top";
import WhatsHappening from "./whatsHappening/whatsHappening";
import { useState } from "react";
import Post from "./post";
import forYouJSON from "../forYou.json";
import ForYou from "./forYou";
import followingJSON from "../following.json";
import Following from "./following";

function Posts() {
  const [active, setActive] = useState(false);

  return (
    <div className="posts relative">
      <Top active={active} setActive={setActive}></Top>
      {active ? (
        <Following>
          <WhatsHappening></WhatsHappening>

          {followingJSON.map((item) => {
            return (
              <Post
                userName={item.userName}
                name={item.name}
                userImg={item.userImg}
                time={item.time}
                description={item.description}
                image={item.image}
                commentCount={item.commentCount}
                repostCount={item.repostCount}
                likeCount={item.likeCount}
                view={item.view}
              ></Post>
            );
          })}
        </Following>
      ) : (
        <ForYou>
          <WhatsHappening></WhatsHappening>
          {forYouJSON.map((item) => {
            return (
              <Post
                userName={item.userName}
                name={item.name}
                userImg={item.userImg}
                time={item.time}
                description={item.description}
                image={item.image}
                commentCount={item.commentCount}
                repostCount={item.repostCount}
                likeCount={item.likeCount}
                view={item.view}
              ></Post>
            );
          })}
        </ForYou>
      )}
    </div>
  );
}

export default Posts;
