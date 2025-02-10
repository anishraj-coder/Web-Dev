import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import Loader from "./partials/Loader";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";
function Tvshows() {
  const [tv, setTv] = useState([]);
  const [category, setCategory] = useState("on_the_air");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  document.title = "MovieApp | TV shows  " + category.toUpperCase();
  const getTvShow = async (pageNum = 1) => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${pageNum}`);
      if (!data || !data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }
      if (pageNum === 1) {
        setTv(data.results);
      } else {
        setTv((prev) => [...prev, ...data.results]);
      }
      setPage(pageNum + 1);
    } catch (error) {
      console.log("Error:\t" + error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };
  const fetchMoreData = () => {
    if (!loading && hasMore) {
      getTvShow(page);
    }
  };
  useEffect(() => {
    getTvShow(1);
    return () => {
      setTv([]);
      setPage(1);
      setHasMore(true);
    };
  }, [category]);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return <>
  {tv&&tv.length>0? (
        <div 
            className="w-screen h-screen bg-[#1F1E24] p-8 overflow-x-hidden overflow-y-auto"
            id="scrollableDiv"
        >
            <div className="flex justify-start items-center">
                <i
                    className="text-zinc-400 hover:text-[#6556CD] mr-3 font-black text-2xl ri-arrow-left-line cursor-pointer"
                    onClick={() => navigate(-1)}
                ></i>
                <h1 className="text-zinc-400 text-3xl w-fit ] font-g-bold capitalize">Tv<span className="opacity-0">_</span>Shows</h1>
                <Topnav />
                <DropDown 
                    onChange={handleCategoryChange} 
                    title="Category" 
                    option={["airing_today", "popular",'top_rated','on_the_air']}
                    value={category} 
                />
            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                    <h1 className="text-white text-3xl font-g-bold text-center my-5">
                        Loading...
                    </h1>
                }
                endMessage={
                    <p className="text-white text-center my-5">
                        <b>You have seen it all!</b>
                    </p>
                }
                scrollableTarget="scrollableDiv"
            >
                <div className="w-full flex flex-wrap justify-center gap-5">
                    <Cards type={'tv'} data={tv} />
                </div>
            </InfiniteScroll>
        </div>
    ):<Loader/>}
  </>;
}

export default Tvshows;
