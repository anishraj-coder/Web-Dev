import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <nav className="max-w-screen-xl font-satoshi py-7 mx-auto flex items-center justify-between border-zinc-700 border-b-[1px]">
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img 
            className="mr-25"
            src="https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="Refokus logo"
          />
        </a>
        <nav className="links text-sm flex items-center justify-center gap-15">
          {["Home", "Work", "Careers", "", "News"].map((item, idx) => (
            item.length === 0 ? (
              <span key={idx} className="w-[2px] h-5 bg-zinc-700" role="separator" />
            ) : (
              <a 
                key={idx} 
                className="flex items-center gap-1 hover:text-gray-300 transition-colors" 
                href={`#${item.toLowerCase()}`}
              >
                {idx === 1 && (
                  <span 
                    className="inline-block size-1.5 bg-green-400 rounded-full"
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    aria-hidden="true"
                  />
                )}
                {item}
              </a>
            )
          ))}
        </nav>
      </div>
      <Button text="Start a Project" />
    </nav>
  );
}
export default Navbar;
