const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to('.text', {y:'0%', duration:1, stagger:0.25});
tl.to('.slider', {y:'-100%', duration: 1.5, delay:0.5});
tl.to('.intro', {y:'-100%', duration: 1}, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



const logo = document.querySelector('#logo a');
const burger = document.querySelector('.burger');
const navOpen = document.querySelector('.nav-open');
const contact = document.querySelector('.contact');
const social = document.querySelector('.social');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');

const tm = new TimelineMax({paused: true, reversed: true});
tm.to(navOpen,0.5,{y: 0})
.fromTo(a, 0.5, {color: 'white',y:-10, opacity:0}, {color: 'black',y: 0, opacity:1}, '-=1')
.fromTo(b, 0.5, {color: 'white',y:-10, opacity:0}, {color: 'black',y: 0, opacity:1}, '-=1')
.fromTo(c, 0.5, {color: 'white',y:-10, opacity:0}, {color: 'black',y: 0, opacity:1}, '-=1')
.fromTo(logo, 0.5, {color: 'white'}, {color: 'black'}, '-=0.5')
.fromTo(contact,0.5, {y:-10, opacity:0}, {y: 0, opacity:1}, '-=0.1')
.fromTo(social,0.5, {y:-10, opacity: 0}, {y: 0, opacity : 1}, '-=0.5')
.fromTo(line1, 0.5, {backgroundColor: 'white'}, {backgroundColor : 'black'}, '-=1')
.fromTo(line2, 0.5, {backgroundColor: 'white'}, {backgroundColor : 'black'}, '-=1')
.fromTo(line3, 0.5, {backgroundColor: 'white'}, {backgroundColor : 'black'}, '-=1');

burger.addEventListener('click', ()=>{
    tm.reversed()? tm.play():tm.reverse()
})