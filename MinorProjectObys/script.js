
function locomotiveInit(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingScreenAnimation() {
  let timeline1 = gsap.timeline();
  timeline1.from(".line h1", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
  });
  timeline1.from("#line1-part1,#footElement h2", {
    duration: 1.5,
    opacity: 0,
    onStart: () => {
      const h5Timer = document.querySelector("#line1-part1 h5");
      let counter = 0;
      let t = setInterval(() => {
        counter++;
        h5Timer.textContent = counter;
        if (counter === 100) {
          clearInterval(t);
        }
      }, 30);
    },
  });
  timeline1.to(".line h2", {
    animationName: "nowAnime",
    opacity: 1,
    delay: 0,
  });
  timeline1.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay:2,
    onComplete: () => {
      document.querySelector("#loader").style.display = "none";
    },
  });
  
  timeline1.from("#page1 nav, #page1 .page1Header h1",{
    opacity: 0,
    y:100,
    delay: 0.3,
    stagger:0.2,
    
  });
}
function mouseFollower(){
  document.addEventListener("mousemove", function (e) {
    gsap.to("#crsr",{
      left: e.x,
      top: e.y,
      ease:"power1.out"
    });
  });
}

Shery.makeMagnet("#navRight h3, #navLeft .menu-opener__square"  );
loadingScreenAnimation();
mouseFollower();
locomotiveInit();
