import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function HorizontalCards({ data }) {
  
  return (
    <div className="w-full max-h-[65vh] text-white p-3 ">
     
      <div className=" h-[80%] flex min-w-full overflow-x-auto gap-5 ">
        {data.map((d, i) => (
          <div  key={i} className="w-[15vw] rounded-2xl overflow-hidden p-5 border-2 border-zinc-600 shadow-2xl shrink-0  relative mb-3">
            <img
              className="w-full h-[40%] mb-2 rounded-xl object-center object-cover"
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path}`}
              alt=""
            />
            <h1 className="text-2xl font-g-medium">
              {d.original_title || d.title || d.name || d.original_name}
            </h1>
            <p className="text-sm text-zinc-200 mb-5 font-g-medium">
              {d.overview.slice(0, 80)}...{" "}
              <Link className="text-blue-800">more</Link>
            </p>
            <Link className="text-xl absolute bottom-5 left-[50%] flex items-center h-[10%] w-[80%] justify-center -translate-x-[50%] font-g-medium active:bg-[#5548a9] active:text-zinc-300 bg-[#6556CD] rounded-full mt-4">
              Watch Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
