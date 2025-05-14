import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const[showContent,setShowContent]=useState(false);
  useGSAP(()=>{
    const t1= gsap.timeline();
    t1.to(".vi-mask-group",{
      rotate:10,
      ease: "Power4.inOut",
      duration:2,
      transformOrigin:"50% 50%"
    })
    t1.to(".vi-mask-group",{
      scale: 10,
      duration:2,
      delay: -1.8,
      ease:"Expo.inOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function() {
        if(this.progress() >= 0.9){
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.remove();
          }
          setShowContent(true);
          this.kill();
        }
      }
    });
  })
  return (
    <>
    <div className="svg flex item-center justify-center fixed top-0 left-0 z-[100] bg-[#000] w-full h-screen">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/assets/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent&& (<div className="main h-screen w-full ">
          <div className="landing h-screen w-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full z-[2] p-7">
              <div className="logo flex gap-7 items-center">
              <div className="lines flex flex-col gap-[6px]">
                <div className="line bg-white h-[5px] w-8"></div>
                <div className="line bg-white h-[5px] w-7"></div>
                <div className="line bg-white h-[5px] w-6"></div>
              </div>
              <div className="text-2xl -mt-[18px] text-white">Rockstar</div>
              </div>
            </div>
            <div className="imagediv relative h-screen w-full overflow-hidden">
              <img className="absolute left-0 top-0 h-screen w-full object-cover " src="\assets\sky.png" alt="sky png" />
              <img className="absolute left-0 top-0 h-screen w-full object-cover" 
              src="/assets/bg.png" alt="trees" />
              <img className="absolute scale-[0.8] left-1/2 -translate-x-1/2" src="/assets/girlbg.png" alt="trees" />
            </div>
          </div>
          <footer></footer>
        </div>)}
      </>
   
  );
}

export default App;
