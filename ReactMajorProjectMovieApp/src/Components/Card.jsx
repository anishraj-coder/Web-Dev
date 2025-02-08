import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <div className="h-[45vh] w-[17vw] border-3 border-zinc-700 shadow-2xl rounded-2xl overflow-hidden relative group shrink-0">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.7))`,
        }}
        className="shadowed w-full h-full absolute translate-y-[50%] group-hover:translate-y-0 transition-all duration-200"
      ></div>
      <img
        className="h-full w-full object-center object-cover"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || ori}`}
        alt=""
      />
      <div className="details absolute top-[82%] text-white p-3  w-full h-1/2 flex flex-col justify-end group-hover:top-[50%] transition-all duration-200 ">
        <h1 className="text-2xl font-g-bold ">
          {data.original_title || data.title || data.name || data.original_name}
        </h1>
        <p className="text-sm text-zinc-200 mb-5 font-g-medium">
          {data.overview.slice(0, 50)}...{" "}
          <Link className="text-blue-800">more</Link>
        </p>
        <Link className="bg-[#6556CD] text-white text-sm w-fit font-g-regular py-2 px-5  rounded-full  hover:bg-[#6556CD]">Watch Now</Link>
      </div>
    </div>
  )
}

export default Card