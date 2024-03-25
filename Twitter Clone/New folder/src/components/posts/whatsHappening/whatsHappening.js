import EmojiList from "./emojiList";

function WhatsHappening() {
  return (
    <div className="whatsHappening flex items-start p-[16px]">
      <img
        src="profilepic.jpg"
        className="w-[40px] h-[40px] rounded-full cursor-pointer"
        alt="profilePicture"
      />
      <div className="right ml-[16px] w-full">
        <textarea
          className="overflow-auto bg-black text w-full border-none text-[20px] placeholder:text-[#71767b] resize-none
          "
          placeholder="What is happening?!"
          name="whatshappening"
          cols="30"
          rows="2"
        ></textarea>
        <EmojiList></EmojiList>
      </div>
    </div>
  );
}

export default WhatsHappening;
