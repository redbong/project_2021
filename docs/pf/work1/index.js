$('body').niceScroll({
  scrollspeed: 10
});
gsap.to('.bn_1_1', {
  y:100,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_1_1',
    markers:false,
  },
});
gsap.to('.bn_2_1', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_2_1',
    markers:false,
    start:'50% 100%',
    end:'100% 0',
  },
});