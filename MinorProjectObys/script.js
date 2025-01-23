let timeline1 = gsap.timeline();
timeline1.from(".line h1", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
});
timeline1.from("#line1-part1", {
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
timeline1.to(".line h2",{
    animationName:"nowAnime",
    opacity:1,
    delay:0,

});
timeline1.to("#loader", {
  opacity: 0,
  duration: 0.5,
  delay: 3,
});
