import SearchbarIcon from "./searchbarIcon";

function searchbar() {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        className="bg-[#202327] p-[12px] pl-[40px] rounded-full placeholder:text-[#71767b] w-full"
        placeholder="Search"
      />
      <SearchbarIcon></SearchbarIcon>
    </div>
  );
}

export default searchbar;
