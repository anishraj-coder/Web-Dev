import React from "react";

function Footer() {
  return (
    <div className="w-full  font-satoshi">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="left basis-1/2 ">
          <h1 className="text-[11rem] tracking-tight font-semibold">
            refokus.
          </h1>

          {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
            (i,idx) => (
              <a key={idx}
                className="text-sm font-medium text-zinc-500 mr-8 font-satoshi"
                href="#"
              >
                {i}
              </a>
            )
          )}
        </div>
        <div className="right basis-1/2 flex gap-3">
          <div className="basis-1/3">
            <h5 className="text-md font-medium mb-10 capitalize text-zinc-500">
              socials
            </h5>
            {["Instagram", "Twitter", "LinkedIn"].map((i,idx) => (
              <h5 key={idx} className="text-md font-medium mb-3  capitalize text-zinc-500">
                {i}
              </h5>
            ))}
          </div>
          <div className="basis-1/3">
            <h5 className="text-md font-medium mb-10 capitalize text-zinc-500">
              site map
            </h5>
            {["home", "work", "career", "contact"].map((i,idx) => (
              <h5 key={idx} className="text-md font-light mb-3  capitalize text-zinc-200">
                {i}
              </h5>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col items-end">
            <p className="text-right mb-15">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="" src="https://web.archive.org/web/20240917003153im_/https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
