import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full p-8 border-r-1 border-zinc-400 ">
      <h1 className="text-white text-3xl mb-5">
      <i className="ri-tv-line  text-[#6556CD]"></i>
      <span className="ml-3 font-g-bold">Movies App</span>
      </h1>
     <nav className="flex flex-col gap-2 text-zinc-400">
      <h1 className="text-white text-xl mb-2 font-g-medium">New Feed</h1>
      <NavLink to="/trending" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-fire-line mr-2"></i>Trending</NavLink>
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-bard-line mr-2"></i>Popular</NavLink> 
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-film-line mr-2"></i>Movies</NavLink>
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-tv-2-line mr-2"></i>TV Shows</NavLink>
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-team-line mr-2"></i>People</NavLink>
     </nav>
     <hr className="border-zinc-400 mt-3 mb-6  h-[1px]"/>
      <nav className="flex flex-col gap-2 text-zinc-400">
      <h1 className="text-white text-xl mb-2 font-g-medium">Information</h1>
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-information-line mr-2"></i>About </NavLink>
      <NavLink to="/" className="hover:text-white hover:bg-[#6556CD] p-3 font-g-regular transition-all duration-250 rounded-lg text-lg"><i className="ri-phone-line mr-2"></i>Contact</NavLink> 
 
      </nav>
    </div>
    
  );
}

export default SideNav;
