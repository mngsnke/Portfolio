gsap.registerPlugin(ScrollTrigger);

var disclaimer = gsap.timeline();
var texts = gsap.utils.toArray(".convo");
console.log(texts);


texts.forEach((text, i) => {
    disclaimer.to(text, {display: "block", duration: 1})
    .to(text, {display: "none", duration: 1})
});
// disclaimer.to("#hey", {display: "none", duration: 0.1})
// .to("#missu", {display: "block", duration: 0.1})
// .to("#missu", {display: "none", duration: 0.1})
// .to("#scroll", {display: "block", duration: 0.1})
// .to("#scroll", {display: "none", duration: 0.1});

ScrollTrigger.create ({
    animation: disclaimer,
    trigger: "#disclaimer",
    end: "+=10000 top",
    start: "top top",
    delay: 2,
    duration: 2,
    scrub: 1,
    pin: true
});



gsap.to("#grey-kyle", 1, {
    y: '41vh',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#white-kyle",
        start: "top 60%"
    }
});

gsap.to("#black-kyle", 1, {
    y: '-41vh',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#white-kyle",
        start: "top center"
    }
});

gsap.to("#landing", {
    scale: 3,
    delay: 1.5,
    scrollTrigger: {
        trigger: "#white-kyle",
        start: "top center"
    }
});

gsap.to("#quote1", {
    scrollTrigger: {
        trigger: "#punchline",
        toggleActions: "restart pause resume reverse",
        start: "top 30%",
        pin: true
    },
    duration: 0.3,
    y: "5vh",
    opacity: 1,
});

gsap.to("#quote2", {
    scrollTrigger: {
        trigger: "#quote2",
        toggleActions: "restart pause resume reverse",
        start: "top 30%",
    },
    duration: 0.1,
    opacity: 1
})
