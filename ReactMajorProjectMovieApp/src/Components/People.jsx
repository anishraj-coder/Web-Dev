import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import Loader from "./partials/Loader";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";

function People() {
    const [person, setPerson] = useState([]);
      
      const [page, setPage] = useState(1);
      const [hasMore, setHasMore] = useState(true);
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      document.title = "MovieApp | People  "    ;
        const getTvShow = async (pageNum = 1) => {
        try {
          const { data } = await axios.get(`/person/popular?page=${pageNum}`);
          if (!data || !data.results || data.results.length === 0) {
            setHasMore(false);
            return;
          }
          if (pageNum === 1) {
            setPerson(data.results);
          } else {
            setPerson((prev) => [...prev, ...data.results]);
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
          setPerson([]);
          setPage(1);
          setHasMore(true);
        };
      }, []);
     
      return <>
      {person&&person.length>0? (
            <div 
                className="w-screen h-screen bg-[#1F1E24] p-8 overflow-x-hidden overflow-y-auto"
                id="scrollableDiv"
            >
                <div className="flex justify-start items-center">
                    <i
                        className="text-zinc-400 hover:text-[#6556CD] mr-3 font-black text-2xl ri-arrow-left-line cursor-pointer"
                        onClick={() => navigate(-1)}
                    ></i>
                    <h1 className="text-zinc-400 text-3xl w-fit ] font-g-bold capitalize">person<span className="opacity-0">_</span>Shows</h1>
                    <Topnav />
                    
                </div>
    
                <InfiniteScroll
                    dataLength={person.length}
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
                        <Cards type="person" data={person} />
                    </div>
                </InfiniteScroll>
            </div>
        ):<Loader/>}
      </>;
}

export default People