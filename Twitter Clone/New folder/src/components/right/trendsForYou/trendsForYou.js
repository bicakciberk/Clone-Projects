import TrendItem from "./trendItem";
import trendsJSON from "./trends.json";

function trendsForYou() {
  return (
    <div className="flex flex-col items-start mt-[20px] bg-[#16181c] py-[15px] rounded-2xl">
      <p className="text-[#e7e9ea] font-bold text-[20px] px-[15px] mb-[15px]">
        Trends for you
      </p>
      {trendsJSON.map((item) => {
        return (
          <TrendItem
            category={item.category}
            name={item.name}
            posts={item.posts}
          ></TrendItem>
        );
      })}
    </div>
  );
}

export default trendsForYou;
