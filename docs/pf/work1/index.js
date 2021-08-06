$('body').niceScroll({
  scrollspeed: 10
});

function Gsap__init() {
  gsap.to('.bn_1_1', {
    x: -50,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_1_1',
      markers: false,
      start: '0% 50%',
      end: '100% 0',
    },
  });
  gsap.to('.bn_2_1', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_2_1',
      markers: false,
      start: '0% 50%',
      end: '100% 0',
    },
  });
  gsap.to('.bn_2_2', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_2_2',
      markers: false,
      start: '0% 50%',
      end: '100% 0',
    },
  });
  gsap.to('.bn_2_3', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_2_3',
      markers: false,
      start: '50% 50%',
      end: '100% 0',
    },
  });

  gsap.to('.bn_4_1', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_4_1',
      markers: false,
      start: '0% 50%',
      end: '100% 0',
    },
  });

  gsap.to('.bn_5_1', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.bn_5_1',
      markers: false,
      start: '0% 50%',
      end: '100% 0',
    },
  });

  gsap.to('.bn_6_1', {
    x:-160,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_6_1',
      markers:false,
      start:'50% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_6_2', {
    x:20,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_6_2',
      markers:false,
      start:'50% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_7_1', {
    x:20,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_7_1',
      markers:false,
      start:'70% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_10_1', {
    x:100,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_10_1',
      markers:false,
      start:'60% 100%',
      end:'100% 0',
    },
  });
  
  
  gsap.to('.bn_10_2', {
    y:50,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_10_2',
      markers:false,
      start:'60% 100%',
      end:'100% 0',
    },
  });
  
  
  gsap.to('.bn_10_3', {
    x:-130,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_10_3',
      markers:false,
      start:'60% 100%',
      end:'100% 0',
    },
  });
  
  gsap.to('.txt_10_1', {
    y:50,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.txt_10_1',
      markers:false,
      start:'60% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_12_2', {
    y:20,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_12_2',
      markers:false,
      start:'70% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_13_2', {
    y:20,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_13_2',
      markers:false,
      start:'70% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_13_3', {
    y:20,
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:'.bn_13_3',
      markers:false,
      start:'70% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_14_2', {
    y:0,
    opacity:1,
    duration:2,
    delay:0.3,
    scrollTrigger:{
      trigger:'.bn_14_2',
      markers:false,
      start:'50% 100%',
      end:'100% 0',
    },
  });

  gsap.to('.bn_14_3', {
    y:100,
    opacity:1,
    duration:2,
    delay:0.3,
    scrollTrigger:{
      trigger:'.bn_14_3',
      markers:false,
      start:'60% 100%',
      end:'100% 0',
    },
  });

}

$('body').imagesLoaded(function () {
  Gsap__init();
});