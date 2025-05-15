import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "@remixicon/react";
import { RiArrowDownBoxLine, RiArrowDownLine } from "@remixicon/react";

// Register the plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {

  const [showContent, setShowContent] = useState(false);
  const smoothWrapper = useRef(null);
  const smoother = useRef(null);

  useEffect(() => {
    if (showContent) {
      // Initialize ScrollSmoother
      smoother.current = ScrollSmoother.create({
        wrapper: smoothWrapper.current,
        content: "#smooth-content",
        smooth: 2,
        effects: true
      });

      return () => {
        if (smoother.current) {
          smoother.current.kill();
        }
      };
    }
  }, [showContent]);
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(".vi-mask-group", {
      rotate: 10,
      ease: "Power4.inOut",
      duration: 2,
      transformOrigin: "50% 50%"
    })
    t1.to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.remove();
          }
          setShowContent(true);
          this.kill();
        }
      }
    });
  });
  useGSAP(() => {
    if (!showContent) return;

    // Keep your existing animations
    const main = document.querySelector("#main");

    gsap.to('.main',{
      rotate:0,
      scale: 1,
      duration: 2,
      ease: 'Expo.inOut',
      delay:-0.8,
    })
    gsap.to('.sky',{
      scale: 1.3,
      rotate:0,
      duration:2,
      ease: 'Expo.inOut',
      delay:-0.5,
    })
    gsap.to('.tree',{
      rotate:0,
      scale: 1,
      duration:2,
      ease: 'Expo.inOut',
      delay:-0.5,
    })
    gsap.to('.girl',{
      rotate:0,
      translate:'-50% -5%',
      transformOrigin:'50% 100%',
      scale: 0.8,
      duration:2,
      ease:'expo.inOut',
      delay:-0.5,
    })

    // Add new content animations
    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.cntr',
        start: 'top center',
        end: 'bottom center',
      }
    });

    contentTimeline
      .from('.limg img', {
        opacity: 0,
        duration: 1,
        // Removed x position change to maintain original positioning
      })
      .from('.rtext h1', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.5")
      .from('.rtext p', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15
      }, "-=0.3")
      .from('.rtext button', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, "-=0.2");

    // Keep your existing mouse movement effect
    main?.addEventListener("mousemove", function (e) {
      const xmove = (e.clientX / window.innerWidth - 0.5) * 30;
      const ymove = (e.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(".bgtext", {
        x: `${xmove * 4}%`,
        y: `${ymove * 5}%`,
      })
      gsap.to(".sky", {
        x: `${xmove * 0.3}%`,
        y: `${ymove * 0.3}%`,
      })
      gsap.to(".tree", {
        x: `-${xmove * 0.1}%`,
        y: `-${ymove * 0.08}%`,
      })
    })
}, [showContent]);
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
      {showContent && (<>
        <div id="main" className="main rotate-[-10deg] scale-[1.7] min-h-screen w-full overflow-hidden relative">
          <div className="landing h-full w-full bg-black">
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
              <img className="sky scale-[1.8] rotate-[-40deg] absolute left-0 top-0 h-screen w-full object-cover " src="\assets\sky.png" alt="sky png" />
              <img className="absolute scale-[1.6] rotate-[50deg] tree left-0 top-0 h-screen w-full object-cover"
                src="/assets/bg.png" alt="trees" />
              <div className="bgtext flex flex-col gap-25 text-white text-8xl absolute left-1/2 top-18 -translate-x-1/2 ">
                <h1 className="-ml-30 leading-0">grand</h1>
                <h1 className="ml-20 leading-0">theft</h1>
                <h1 className="-ml-20 leading-0">auto</h1>
              </div>
              <img className="girl scale-[0.4] rotate-[20deg] absolute  left-1/2 -translate-x-1/2" src="/assets/girlbg.png" alt="trees" />

              <footer className="w-full h-[5rem] absolute left-0 bottom-[-2px] px-3 py-2 bg-gradient-to-t from-black to-transparent flex justify-between items-center">
                <div className="sdown flex text-white gap-4 text-lg item-center">
                  <RiArrowDownLine size={30} color="white" />
                  <h3 className="font-[halvatica]">Scroll down</h3>
                </div>
                <img className="h-12  left-1/2 -translate-x-1/2 " src="./assets/ps5.png" alt="" />

              </footer>
            </div>

          </div>

          <div className="h-screen w-full bg-black flex justify-center items-center px-10">
            <div className="cntr flex justify-between w-full h-[80%]">
              <div className="limg relative h-full w-1/2">
                <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/assets/imag.png" alt="girl logo" />
              </div>
              <div className="rtext text-white h-full w-1/2  p-10 [&_p]:font-[halvatica] [&_p]:w-[80%] ">
                <h1 className="text-7xl">Still Running</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="mt-10 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae doloribus tenetur perferendis sunt eveniet facere nisi beatae veniam hic natus qui repudiandae </p>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit facere fuga temporibus error, saepe exercitationem deleniti dolor quod qui debitis assumenda.</p>
                <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita facilis nostrum maiores saepe maxime suscipit, illum natus amet consequatur curem?</p>
                <button className="bg-yellow-400 px-6 py-4 rounded-xl mt-6 text-black text-xl">Download Now</button>
              </div>
            </div>
          </div>

          {/* Updated GTA 6 themed section */}
          <div className="gta6-section h-[120vh] w-full bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-900/20 to-blue-500/20 z-10 animate-gradient"></div>
            
            <div className="city-skyline absolute bottom-0 w-full h-[70%] z-20">
              <div className="neon-grid absolute inset-0" 
                style={{
                  background: 'linear-gradient(transparent, rgba(255, 0, 255, 0.2))',
                  backgroundSize: '50px 50px', 
                  backgroundImage: 'linear-gradient(0deg, #ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
                  transform: 'perspective(1000px) rotateX(60deg)',
                  transformOrigin: 'bottom'
                }}>
              </div>
            </div>

            <div className="content-wrapper relative z-30 h-full flex flex-col items-center justify-center px-20">
              <h2 className="gta6-title text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-10 tracking-tighter select-none">GTA VI</h2>
              
              <div className="features-grid grid grid-cols-2 gap-20 w-full max-w-6xl">
                <div className="feature-card relative group">
                  <div className="card-content bg-black/40 backdrop-blur-sm p-8 border border-pink-500/30 rounded-lg overflow-hidden">
                    <div className="card-glow absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-pink-500 text-4xl mb-4 relative z-10">Vice City Nights</h3>
                    <p className="text-gray-300 text-lg relative z-10">Experience the neon-soaked streets of modern Vice City. Every corner tells a story, every night holds a new adventure.</p>
                  </div>
                </div>

                <div className="feature-card relative group">
                  <div className="card-content bg-black/40 backdrop-blur-sm p-8 border border-cyan-500/30 rounded-lg overflow-hidden">
                    <div className="card-glow absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-cyan-500 text-4xl mb-4 relative z-10">Dual Protagonists</h3>
                    <p className="text-gray-300 text-lg relative z-10">Switch between two unique characters as their stories intertwine in the criminal underworld of Vice City.</p>
                  </div>
                </div>

                <div className="feature-card relative group">
                  <div className="card-content bg-black/40 backdrop-blur-sm p-8 border border-purple-500/30 rounded-lg overflow-hidden">
                    <div className="card-glow absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-purple-500 text-4xl mb-4 relative z-10">Dynamic World</h3>
                    <p className="text-gray-300 text-lg relative z-10">A living, breathing city that evolves with your choices. Your actions shape the narrative in unprecedented ways.</p>
                  </div>
                </div>

                <div className="feature-card relative group">
                  <div className="card-content bg-black/40 backdrop-blur-sm p-8 border border-blue-500/30 rounded-lg overflow-hidden">
                    <div className="card-glow absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-blue-500 text-4xl mb-4 relative z-10">Next-Gen Graphics</h3>
                    <p className="text-gray-300 text-lg relative z-10">Pushing the boundaries of realism with ray tracing, advanced weather systems, and unprecedented detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New spacing section with parallax effect */}
          <div className="h-screen w-full bg-black/90 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-30">
              <img 
                src="/assets/bg.png" 
                alt="background" 
                className="w-full h-full object-cover scale-125 origin-center parallax-bg"
              />
            </div>
            <div className="text-center z-10 space-y-8 px-4">
              <h2 className="text-6xl font-bold text-white tracking-wider">COMING SOON</h2>
              <p className="text-2xl text-gray-400 max-w-2xl mx-auto">The next chapter in the Grand Theft Auto saga.</p>
            </div>
          </div>

        </div>
      </>
      )}
    </>
  );
}

export default App;

// Inside your useGSAP hook, after the existing animations

// GTA 6 section animations
const gta6Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.gta6-section',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Neon grid animation
gsap.fromTo('.neon-grid', 
  {
    opacity: 0,
    scale: 1.2,
    y: '10%'
  },
  {
    opacity: 0.3,
    scale: 1,
    y: '30%',
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.gta6-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  }
);

// Title animation with glow effect
gta6Timeline.from('.gta6-title', {
  y: 100,
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  ease: 'back.out(1.7)'
});

// Staggered card animations with hover effect
gsap.from('.feature-card', {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.features-grid',
    start: 'top center+=100',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
});

// Continuous glow animation for cards
gsap.to('.card-glow', {
  opacity: 0.3,
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: 'power1.inOut'
});

// Background gradient animation
gsap.to('.gta6-section', {
  backgroundPosition: '100% 100%',
  duration: 3,
  ease: 'none',
  repeat: -1,
  yoyo: true
});
