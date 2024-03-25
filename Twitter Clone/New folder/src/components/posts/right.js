import Bookmark from "./bookmark";
import Share from "./share";

function right() {
  return (
    <div className="flex ml-[20%]">
      <Bookmark></Bookmark>
      <Share></Share>
    </div>
  );
}

export default right;
