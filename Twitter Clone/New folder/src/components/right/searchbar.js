import SearchbarIcon from "./searchbarIcon";

function searchbar() {
  return (
    <div className="searchbar flex fixed top-[0px] items-center bg-black py-[5px] w-[325px]">
      <input
        type="text"
        id="nav-searchbar"
        className="bg-[#202327] px-[12px] pl-[40px] py-[5px] rounded-full placeholder:text-[#71767b] w-full"
        placeholder="Search"
      />
      <SearchbarIcon></SearchbarIcon>
    </div>
  );
}

export default searchbar;
