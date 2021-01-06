    //***** header or name 'andres gonzalez' animation *****

    var textWrapper = document.querySelector('.header-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class ='letter'>$&</span>");

    anime.timeline()
    .add({
      targets: '.header-1 .letter',
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i
    });

    var textWrapper = document.querySelector('.header-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class ='letter'>$&</span>");

    anime.timeline()
    .add({
      targets: '.header-2 .letter',
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i
    });

    //***** black splash fade out animation *****

    TweenMax.to(".wrapper", 2, {
      top: "-100%",
      ease: Expo.easeInOut,
      delay: 3.6
    });

    //***** white square fade in and fade out animation *****

    var tl = new TimelineMax();

    // white box fade in

    tl.from(".loader", 1.6, {
      scaleY: "0%",
      y: 80,
      ease: Expo.easeInOut,
      delay: 1,
      transformOrigin: "50% 100%"
    });

    // white box fade out

    tl.to(".loader", 1.6, {
      height: "20vh",
      scaleY: "0%",
      ease: Expo.easeInOut,
      transformOrigin: "0% -100%"
    })

    //***** main image animation fade in animation *****

    TweenMax.to(".box", 2.4, {
      y: "-100%",
      ease: Expo.easeInOut,
      delay: 3.8
    });

    //***** nav bar fade in animation *****

    var tl = new TweenMax.staggerFrom(".menu > div", 2, {
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
      delay: 4.2
    }, 0.1);

    //***** rest of the text fade in animation *****

    var tl = new TweenMax.staggerFrom(".hero-container > div", 2, {
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
      delay: 4.2
    }, 0.1);