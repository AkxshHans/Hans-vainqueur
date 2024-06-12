
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
    },20000)
}
time()


t1.to("#loader h1",{
    
    delay  : 0.5,
    duration : 1 ,
    onStart : time()

})

gsap.to("#loader",{
    top : "-100vh" ,
    delay : 4,
    duration : 1.9 ,
})




gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%" ,
        end:"top -100%" ,
        scrub:5,
        pin:true,

    }
})



gsap.from("#page3 #img1 , #page3 #vdo1 ",{
    x:-50,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%" ,
        end:"top 100%" ,
        scrub:5,
        pin:true,

    }
})
gsap.from("#page3 #img2 , #page3 #img4",{
    x:50,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%" ,
        end:"top 100%" ,
        scrub:5,
        pin:true,

    }
})

gsap.from("#page3 #vdo2 , #page3 #img5",{
    y:50,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%" ,
        end:"top 100%" ,
        scrub:5,
        pin:true,

    }
})



gsap.from("#page3 #vdo3 , #page3 #img6 , #page3 #vdo4",{
    y:-50,
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%" ,
        end:"top 100%" ,
        scrub:5,
        pin:true,

    }
})






