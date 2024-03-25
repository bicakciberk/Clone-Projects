function trendItem({ category, name, posts }) {
  return (
    <div className="trendItem py-[16px] px-[15px] cursor-pointer hover:bg-[#1d1f23] duration-100 w-full">
      <p className="category text-[13px] text-[#71767b]">{category}</p>
      <p className="header text-[#e7e9ea] ml-[1px] text-[15px] font-bold">
        {name}
      </p>
      <p className="postCount text-[#71767b] text-[13px]">{posts} posts</p>
    </div>
  );
}

export default trendItem;
