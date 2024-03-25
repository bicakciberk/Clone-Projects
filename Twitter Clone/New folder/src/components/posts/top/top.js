import Setting from "./setting";

function Top({ active, setActive }) {
  return (
    <div className="top flex items-center text-[15px] select-none">
      <div
        className="py-[12px] w-[264px] hover:bg-[#181919] cursor-pointer text-center duration-100 relative"
        onClick={() => setActive(false)}
      >
        <p
          style={
            active
              ? { color: "#71767b", fontWeight: "bold" }
              : { color: "#fefefe", fontWeight: "normal" }
          }
        >
          For you
        </p>
        <div
          className="bgborder absolute bottom-0 left-2/4 -translate-x-2/4 h-[4px] w-[56px] rounded-full bg-blue"
          style={active ? { display: "none" } : { display: "flex" }}
        ></div>
      </div>

      <div
        className="py-[12px] w-[264px] hover:bg-[#181919] cursor-pointer text-center duration-100 relative"
        onClick={() => setActive(true)}
      >
        <p
          style={
            active
              ? { color: "#fefefe", fontWeight: "normal" }
              : { color: "#71767b", fontWeight: "bold" }
          }
        >
          Following
        </p>
        <div
          className="bgborder hidden absolute bottom-0 left-2/4 -translate-x-2/4 h-[4px] w-[56px] rounded-full bg-blue"
          style={active ? { display: "flex" } : { display: "none" }}
        ></div>
      </div>

      <div className="mx-[12px] hover:bg-[#181919] duration-100 w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer">
        <Setting></Setting>
      </div>
    </div>
  );
}

export default Top;
