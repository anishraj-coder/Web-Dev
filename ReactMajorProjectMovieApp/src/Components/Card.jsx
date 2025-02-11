import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Card({ data, title }) {
  
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const adjustFontSize = () => {
    const title = titleRef.current;
    const container = containerRef.current;
    if (!title || !container) return;

    title.style.fontSize = "1.5rem";
    const containerWidth = container.offsetWidth;
    const textWidth = title.scrollWidth;

    if (textWidth > containerWidth) {
      const ratio = containerWidth / textWidth;
      const newSize = Math.max(Math.floor(24 * ratio), 14);
      title.style.fontSize = `${newSize}px`;
    }
  };

  useEffect(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => window.removeEventListener("resize", adjustFontSize);
  }, [data]);

  return (
    <div className="h-[45vh] w-[17vw] border-3 border-zinc-700 shadow-2xl rounded-2xl overflow-hidden relative group shrink-0">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.7))`,
        }}
        className="shadowed w-full h-full absolute translate-y-[50%] group-hover:translate-y-0 transition-all duration-200"
      ></div>
      <span className="absolute top-[3%] right-[3%] text-white flex items-center justify-center  text-xs font-g-bold bg-yellow-500/75 size-10 rounded-full p-3 ">
        {Math.floor(data.vote_average * 10)}
        <sup>%</sup>{" "}
      </span>
      <img
        className="h-full w-full object-center object-cover"
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        }`}
        alt=""
      />
      <div className="details absolute top-[82%] text-white p-3 w-full h-1/2 flex flex-col justify-end group-hover:top-[50%] transition-all duration-200">
        <div ref={containerRef} className="w-full">
          <h1
            ref={titleRef}
            className="font-g-bold leading-tight"
            style={{
              wordWrap: "break-word",
              transition: "font-size 0.2s ease",
            }}
          >
            {data.original_title ||
              data.title ||
              data.name ||
              data.original_name}
          </h1>
        </div>
        <p className="text-sm text-zinc-200 mb-5 font-g-medium mt-2">
          {data.overview && data.overview.slice(0, 50)}...{" "}
          <Link className="text-blue-800">more</Link>
        </p>
        <Link to={`/${data.media_type||title}/details/${data.id}`} className="bg-[#6556CD] text-white text-sm w-fit font-g-regular py-2 px-5 rounded-full hover:bg-[#6556CD]">
          Watch Now
        </Link>
      </div>
    </div>
  );
}

export default Card;
