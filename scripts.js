
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstPage(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.7,
        ease: Expo.easeInOut
    })
    t1.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2.5,
        stagger:0.2,
        delay:-1
    })
    t1.from("#headfooter",{
        y:-10,
        
        opacity:0,
        duration:1.5,
        delay:-1.2,
        ease:Expo.easeInOut,
        
        
       
    })
}


// function skew(){
//     var xscale =1;
//     var yscale =1;
//     var xprev=0;
//     var yprev=0;
//     window.addEventListener("mousemove",function(dets){
//         xscale= gsap.utils.clamp(.8,1.2,xdiff);
//         yscale= gsap.utils.clamp(.8,1.2,ydiff);

//         var xdiff=dets.clientX-xprev;
//         xprev=dets.clientX;

//         var ydiff=dets.clientY-yprev;
//         yprev=dets.clientY;
          
//         circleMouse(xscale,yscale);
//     });
// }
function circleMouse(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px 
       
             ) `
    })
}


    document.querySelectorAll(".elem").forEach(function(elem){
        var rotate=0;
        var iff=0;
        elem.addEventListener("mousemove",function(det){
            var diff=det.clientY-elem.getBoundingClientRect();
            iff=det.clientX-rotate
            gsap.utils.clamp(-10,10,iff)
            rotate=det.clientX
            gsap.to(elem.querySelector(".img"),{
                opacity:1,
                ease:Power3,
                top:diff,
                left:det.clientX,
                rotate:gsap.utils.clamp(-10,10,iff)
                
            })
        })
        elem.addEventListener("mouseleave",function(det){
            
            gsap.to(elem.querySelector(".img"),{
                opacity:0,
                ease:Power3,
                
            })
        })

    })

    function timer(){
        let hrs=document.querySelector("#hrs")
        let min=document.querySelector("#min")
       let sec=document.querySelector("#sec")
        let time =new Date()
        hrs.innerHTML=time.getHours();
        min.innerHTML=time.getMinutes()
        sec.innerHTML=time.getSeconds()
        setInterval(timer,1000)
    }



circleMouse();
firstPage();
// skew();
setInterval(timer(),1000)