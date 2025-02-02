import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ text }) {
  return (
    <button className="group bg-[#FAF5FF] min-w-40 text-black font-satoshi font-light text-sm px-3 py-2 rounded-full hover:bg-[#F3E8FF] transition-colors duration-300">
      <div className="flex justify-between items-center">
        <div className="h-6 relative overflow-hidden">
          <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
            <span className="h-6 font-medium">{text || "Go Back"}</span>
            <span className="h-6 font-medium">{text || "Go Back"}</span>
          </div>
        </div>
        <div className="h-6 relative overflow-hidden">
          <div
            className="flex flex-col transition-transform duration-500 ease-in-out group-hover:translate-y-6"
            style={{ transform: "translateY(-50%)" }}
          >
            <IoIosReturnRight className="text-xl h-6" />
            <IoIosReturnRight className="text-xl h-6" />
          </div>
        </div>
      </div>
    </button>
  );
}

export default Button;
