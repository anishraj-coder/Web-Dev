import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className=" max-w-screen-xl font-satoshi py-7 mx-auto flex items-center justify-between border-zinc-700 border-b-[1px] ">
      <div className=" flex items-center " ><img className="mr-25 "
        src="https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links text-sm flex items-center justify-center gap-15 ">        
      {["Home", "Work", "Careers","","News"].map((item,idx)=>(
        item.length===0 ? <span key={idx} className=" w-[2px] h-5 bg-zinc-700"></span> :<a key={idx} className="flex items-center gap-1" href="#">
        {idx===1&&<span key={idx} style={{boxShadow:" 0 0 0.45em #00FF19"}} className="inline-block size-1.5 bg-green-400 rounded-full"></span>}
         {item}
         </a>)
      )}</div></div>
       <Button text={'Start a Project'} ></Button>
    </div>
  );
}

export default Navbar;
