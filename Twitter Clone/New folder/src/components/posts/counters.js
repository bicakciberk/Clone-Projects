import Comment from "./comment";
import Repost from "./repost";
import Like from "./like";
import View from "./view";

function counters({ commentCount, likeCount, repostCount, view }) {
  return (
    <div className="flex justify-between w-full items-center">
      <Comment>{commentCount}</Comment>
      <Repost>{repostCount}</Repost>
      <Like>{likeCount}</Like>
      <View>{view}</View>
    </div>
  );
}

export default counters;
