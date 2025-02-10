import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/DropDown";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./partials/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  document.title = "MovieApp | Trending " + category.toUpperCase();

  const getTrending = async (pageNum = 1) => {
    if (loading) return;

    try {
      setLoading(true);
      console.log(`/trending/${category}/${duration}?page=${pageNum}`);
      const response = await axios.get(`/trending/${category}/${duration}?page=${pageNum}`);

      if (!response.data || !response.data.results || response.data.results.length === 0) {
        setHasMore(false);
        return;
      }

      if (pageNum === 1) {
        setTrending(response.data.results);
      } else {
        setTrending((prev) => [...prev, ...response.data.results]);
      }

      setPage(pageNum + 1);
    } catch (error) {
      console.error("Error fetching trending data:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      getTrending(page);
    }
  };

  useEffect(() => {
    getTrending(1);

    return () => {
      setTrending([]);
      setPage(1);
      setHasMore(true);
    };
  }, []);

  useEffect(() => {
    setPage(1);
    setTrending([]);
    setHasMore(true);
    getTrending(1);
  }, [category, duration]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <>
      {trending && trending.length > 0 ? (
        <div
          className="w-screen h-screen bg-[#1F1E24] p-8 overflow-x-hidden overflow-y-auto"
          id="scrollableDiv"
        >
          <div className="flex justify-start items-center">
            <i
              className="text-zinc-400 hover:text-[#6556CD] mr-3 font-black text-2xl ri-arrow-left-line cursor-pointer"
              onClick={() => navigate(-1)}
            ></i>
            <h1 className="text-zinc-400 text-3xl font-g-bold">Trending</h1>
            <Topnav />
            <DropDown
              onChange={handleCategoryChange}
              title="Category"
              option={["all", "movie", "tv"]}
              value={category}
            />
            <span className="block w-[10px] bg-[#6556CD] mx-3 h-full"></span>
            <DropDown
              onChange={handleDurationChange}
              title="Duration"
              option={["week", "day"]}
              value={duration}
            />
          </div>

          <InfiniteScroll
            dataLength={trending.length}
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
              <Cards data={trending} />
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Trending;