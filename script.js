var tl=gsap.timeline();
tl.from(".imagecontainer img",{
    y:550,
    duration:2
})
tl.from(".three h3",{
    y:65,
})
tl.to("#main",{
    y:"-8.5%",
    duration:1
})
tl.from(".three button",{
    y:"-5vw",
    duration:1
})
var page2=document.querySelector(".box1");
page2.addEventListener("mousemove", function(dets){
    gsap.to(".box1 .mouse",{
        left:dets.x,
        top:dets.y,
    })
})
page2.addEventListener("mouseenter",function(){
    gsap.to(".box1 .mouse",{
        scale:1,
    })
})
page2.addEventListener("mouseleave",function(){
    gsap.to(".box1 .mouse",{
        scale:0,
    })
})
var page22=document.querySelector(".box2");
page22.addEventListener("mousemove", function(dets){
    gsap.to(".box2 .mouse",{
        x:dets.x-600,
        y:dets.y-180,
    })
})
page22.addEventListener("mouseenter",function(){
    gsap.to(".box2 .mouse",{
        scale:1,
    })
})
page22.addEventListener("mouseleave",function(){
    gsap.to(".box2 .mouse",{
        scale:0,
    })
})
var page222=document.querySelector(".box3");
page222.addEventListener("mousemove", function(dets){
    gsap.to(".box3 .mouse",{
        x:dets.x-1100,
        y:dets.y,
    })
})
page222.addEventListener("mouseenter",function(){
    gsap.to(".box3 .mouse",{
        scale:1,
    })
})
page222.addEventListener("mouseleave",function(){
    gsap.to(".box3 .mouse",{
        scale:0,
    })
})
var page4=document.querySelector(".page4");
page4.addEventListener("mousemove",function(chacha){
    gsap.to(".page4mouse",{
       x:chacha.x,
       y:chacha.y
    })
})
var flag=0;
page4.addEventListener("mouseenter",function(){
    gsap.to(".page4mouse",{
       scale:1,
        flag:1
    })
})
page4.addEventListener("mouseleave",function(){
    gsap.to(".page4mouse",{
       scale:0,
        flag:0
    })
})
var page5=document.querySelector(".page5");
page5.addEventListener("mousemove",function(chacha){
    gsap.to(".page5mouse",{
       x:chacha.x,
       y:chacha.y
    })
})
var flag=0;
page5.addEventListener("mouseenter",function(){
    gsap.to(".page5mouse",{
       scale:1,
        flag:1
    })
})
page5.addEventListener("mouseleave",function(){
    gsap.to(".page5mouse",{
       scale:0,
        flag:0
    })
})
var page6=document.querySelector(".page6");
page6.addEventListener("mousemove",function(chacha){
    gsap.to(".page6mouse",{
       x:chacha.x,
       y:chacha.y
    })
})
var flag=0;
page6.addEventListener("mouseenter",function(){
    gsap.to(".page6mouse",{
       scale:1,
        flag:1
    })
})
page6.addEventListener("mouseleave",function(){
    gsap.to(".page6mouse",{
       scale:0,
        flag:0
    })
})
var page7=document.querySelector(".page7");
page7.addEventListener("mousemove",function(chacha){
    gsap.to(".page7mouse",{
       x:chacha.x,
       y:chacha.y
    })
})
var flag=0;
page7.addEventListener("mouseenter",function(){
    gsap.to(".page7mouse",{
       scale:1,
        flag:1
    })
})
page7.addEventListener("mouseleave",function(){
    gsap.to(".page7mouse",{
       scale:0,
        flag:0
    })
})
var about1=document.querySelector(".about1");
var h1=document.querySelector(".about1 h1");
var h2=document.querySelector(".about1 h2");
var flag=0;
about1.addEventListener("mouseenter",function(){
    gsap.to(".about1 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about1.addEventListener("mouseenter",function(){
    gsap.to(".about1 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about1.addEventListener("mouseleave",function(){
    gsap.to(".about1 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about1.addEventListener("mouseleave",function(){
    gsap.to(".about1 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about2=document.querySelector(".about2");
var h1=document.querySelector(".about2 h1");
var h2=document.querySelector(".about2 h2");
var flag=0;
about2.addEventListener("mouseenter",function(){
    gsap.to(".about2 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about2.addEventListener("mouseenter",function(){
    gsap.to(".about2 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about2.addEventListener("mouseleave",function(){
    gsap.to(".about2 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about2.addEventListener("mouseleave",function(){
    gsap.to(".about2 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about3=document.querySelector(".about3");
var h1=document.querySelector(".about3 h1");
var h2=document.querySelector(".about3 h2");
var flag=0;
about3.addEventListener("mouseenter",function(){
    gsap.to(".about3 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about3.addEventListener("mouseenter",function(){
    gsap.to(".about3 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about3.addEventListener("mouseleave",function(){
    gsap.to(".about3 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about3.addEventListener("mouseleave",function(){
    gsap.to(".about3 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about4=document.querySelector(".about4");
var h1=document.querySelector(".about4 h1");
var h2=document.querySelector(".about4 h2");
var flag=0;
about4.addEventListener("mouseenter",function(){
    gsap.to(".about4 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about4.addEventListener("mouseenter",function(){
    gsap.to(".about4 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about4.addEventListener("mouseleave",function(){
    gsap.to(".about4 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about4.addEventListener("mouseleave",function(){
    gsap.to(".about4 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about5=document.querySelector(".about5");
var h1=document.querySelector(".about5 h1");
var h2=document.querySelector(".about5 h2");
var flag=0;
about5.addEventListener("mouseenter",function(){
    gsap.to(".about5 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about5.addEventListener("mouseenter",function(){
    gsap.to(".about5 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about5.addEventListener("mouseleave",function(){
    gsap.to(".about5 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about5.addEventListener("mouseleave",function(){
    gsap.to(".about5 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about6=document.querySelector(".about6");
var h1=document.querySelector(".about6 h1");
var h2=document.querySelector(".about6 h2");
var flag=0;
about6.addEventListener("mouseenter",function(){
    gsap.to(".about6 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about6.addEventListener("mouseenter",function(){
    gsap.to(".about6 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about6.addEventListener("mouseleave",function(){
    gsap.to(".about6 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about6.addEventListener("mouseleave",function(){
    gsap.to(".about6 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about7=document.querySelector(".about7");
var h1=document.querySelector(".about7 h1");
var h2=document.querySelector(".about7 h2");
var flag=0;
about7.addEventListener("mouseenter",function(){
    gsap.to(".about7 h1",{
        y:-50,
        flag:1,
        duration:0.4
    })
})
about7.addEventListener("mouseenter",function(){
    gsap.to(".about7 h2",{
        y:-50,
        duration:0.4,
        flag:1,
    })
})
about7.addEventListener("mouseleave",function(){
    gsap.to(".about7 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about7.addEventListener("mouseleave",function(){
    gsap.to(".about7 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})
var about8=document.querySelector(".about8");
var h1=document.querySelector(".about8 h1");
var h2=document.querySelector(".about8 h2");
var flag=0;
about8.addEventListener("mouseenter",function(){
    gsap.to(".about8 h1",{
        y:-150,
        flag:1,
        duration:0.4
    })
})
about8.addEventListener("mouseenter",function(){
    gsap.to(".about8 h2",{
        y:-150,
        duration:0.4,
        flag:1,
    })
})
about8.addEventListener("mouseleave",function(){
    gsap.to(".about8 h1",{
        y:0,
        duration:0.4,
        flag:0,
    })
})
about8.addEventListener("mouseleave",function(){
    gsap.to(".about8 h2",{
        y:0,
        duration:0.4,
        flag:0
    })
})






































// var image=document.querySelector(".loader img");
// var tl=gsap.timeline();
// tl.from(".imageholder img",{
//     y:480,
//     duration:1,
//     delay:1.5,
//     stagger:1
// })
// tl.from(".textholder h2",{
//     y:180,
//     duration:1,
//     stagger:1
// })
// gsap.to(".loader",{
//     y:"-130%",
//     duration:2,
//     delay:3.3
// })
// gsap.from(".fixed",{
//     y:"-100%",
//     duration:1,
//     delay:4
// })