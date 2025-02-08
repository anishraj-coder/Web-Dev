import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import Loader from "./partials/Loader";
function Home() {
  document.title = "MovieApp | Home";
  const [wallpaper, serWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomData = data.results[(Math.random() * 20).toFixed()];
      serWallpaper(randomData);
    } catch (err) {
      console.log("Error:\t" + err);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (err) {
      console.log("Error:\t" + err);
    }
  };
  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);
  return (
    <>
         
      {wallpaper && trending ? (
        <>
         <SideNav />
        <div className="h-full w-[80%] relative overflow-y-auto overflow-x-hidden">
          <Topnav />
          <Header wallpaper={wallpaper} />
          <div className="mb-6 flex justify-between text-white px-3 mt-4">
            <h1 className="font-g-bold text-5xl">Trending</h1>
            <DropDown
              onClick={(e) => setCategory(e.target.value)}
              title={`Filter`}
              option={[`tv`, "movie", "all"]}
            />
          </div>
          <HorizontalCards data={trending} />
        </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
