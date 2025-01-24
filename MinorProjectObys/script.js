
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
  let flag=0;
  let videoWrapper=document.querySelector(".videoWrapper");
  document.addEventListener("mousemove", function (e) {
    gsap.to("#crsr",{
      left: e.x,
      top: e.y,
      ease:"power1.out"
    });
  });
  let crsr=document.querySelector("#crsr");
  let button=document.querySelector("#playIcon");
 videoWrapper.addEventListener("mouseenter", function () {
   
   videoWrapper.addEventListener("mousemove",function(dets){
      gsap.to(crsr,{
        opacity:0
      });
      gsap.to(button,{

        left: dets.x-490,
        top: dets.y - 130,
        ease:"power1.out"
      });
    });
  });
 videoWrapper.addEventListener("mouseleave", function () {
    gsap.to(".videoWrapper img",{
      opacity:1,
      ease:"power1.out"
    });
    gsap.to(crsr,{
      opacity:1,
    });
    flag=0;
    document.querySelector("#playIcon").innerHTML=`<i class="ri-play-fill"></i>`;
    gsap.to("#playIcon",{
      scale:1,
      ease:"power1.out"
    });
    gsap.to(button,{

      left: "80%",
      top: "0%",
      ease:"power1.out",
    });
   videoWrapper.addEventListener("mouseleave",function(){
      
    });
  });

  videoWrapper.addEventListener("click", function () {
    if(flag===0){
      flag=1;
      gsap.to(".videoWrapper img",{
        opacity:0,
        ease:"power1.out"
      });
      document.querySelector("#playIcon").innerHTML=`<i class="ri-pause-fill"></i>`;
      gsap.to("#playIcon",{
        scale:0.7,
        ease:"power1.out"
      });
    }
    else{
      flag=0;
      gsap.to(".videoWrapper img",{
        opacity:1,
        ease:"power1.out"
      });
      document.querySelector("#playIcon").innerHTML=`<i class="ri-play-fill"></i>`;
      gsap.to("#playIcon",{
        scale:1,
        ease:"power1.out"
      });
    }
   
  });
}
function sheryAnimation(){
  Shery.imageEffect(".image-div", {
    style: 6,
    config:{"noiseDetail":{"value":9.92,"range":[0,100]},"distortionAmount":{"value":10,"range":[0,10]},"scale":{"value":66.41,"range":[0,100]},"speed":{"value":0.36,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.38,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true,
  });
  Shery.makeMagnet("#navRight h3, #navLeft .menu-opener__square"  );
}
loadingScreenAnimation();
mouseFollower();
locomotiveInit();

sheryAnimation();
function circleAnimation() {
  let circles = document.querySelectorAll(".imageCircle");

  circles.forEach((circle) => {
    let content = circle.querySelector(".circle-in");
    let contentp = circle.querySelector(".circle-in p");

    circle.addEventListener("mouseover", function () {
      // Kill any animations currently running on these elements
      gsap.killTweensOf(content);
      gsap.killTweensOf(contentp);

      // Animate the circle
      gsap.to(content, {
        scale: 1,
        opacity: 1,
        duration: 0.2, // Fast animation for the circle
        ease: "power2.out", // Smooth easing
      });

      // Animate the <p> inside the circle
      gsap.to(contentp, {
        scale: 1,
        opacity: 1,
        duration: 0.3, // Fast animation for the text
        ease: "power2.out", // Smooth easing
      });
    });

    circle.addEventListener("mouseout", function () {
      // Kill any animations currently running on these elements
      gsap.killTweensOf(content);
      gsap.killTweensOf(contentp);

      // Animate the circle back to its original state
      gsap.to(content, {
        scale: 0,
        opacity: 0,
        duration: 0.15, // Fast exit for the circle
        ease: "power2.in", // Smooth easing for shrinking
      });

      // Animate the <p> back to its original state
      gsap.to(contentp, {
        scale: 0,
        opacity: 0,
        duration: 0.1, // Fast exit for the text
        ease: "power2.in", // Smooth easing for shrinking
      });
    });
  });
}
circleAnimation();
function flagAnimation(){
  document.addEventListener("mousemove", function (e) {
    gsap.to("#flag", {

      top: e.y,
      left: e.x,
      transform:"translate(-50%,-50%)",
      ease:"power1.out",
      
    });
  });
  document.querySelector("#flagEntry").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    });
  });
  document.querySelector("#flagEntry").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0,
      scale: 0,
      duration:0.2,
      ease: "power1.out",
    });
  });
}
flagAnimation();