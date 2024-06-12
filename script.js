
var t1 = gsap.timeline()


function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
        else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
    },150)
}
time()


t1.to("#loader h1",{
    
    delay  : 0.5,
    duration : 1 ,
    onStart : time()

})

gsap.to("#loader",{
    top : "-100vh" ,
    delay : 2.4,
    duration : 1.9 ,
})



//page1showcase

gsap.from("#developer #akash",{
    opacity:0,
    y:100,
    duration:0.8,
    delay:3.7,
    // ease:"power3.out",
    scrub:3,

})
gsap.from("#developer #deve",{
    opacity:0,
    y:100,
    duration:0.8,
    delay:3.7,
    // ease:"power3.out",
    scrub:3,

})
gsap.from("#page1showcase video, #page1showcase button ",{
    opacity:0,
    scale:0,
    y:100,
    duration:0.9,
    delay:3.7,
    // ease:"power3.out",
    scrub:3,
    stagger:1,
   

})

Shery.makeMagnet("#page1showcase video , #page1showcase button , #developer #akash , #developer #deve" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });




//   Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });




