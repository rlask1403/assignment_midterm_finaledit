TweenLite.set("#container",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 30;
var warp = document.getElementById("container"),   w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-100,-50),z:R(-100,100)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};

let cont = document.getElementById('cont');
let title = document.getElementById('title');

window.onload = function(){

  setInterval(function(){

    setTimeout(function(){
      title.style.opacity = '0';
    },4000)

    setTimeout(function(){
      title.style.opacity = '1'
      title.innerHTML = 'The most beautiful love story ever told'
    },5000)

    setTimeout(function(){
      title.style.opacity = '0';
    },7000)

    setTimeout(function(){
      title.style.opacity = '1'
      title.innerHTML = 'Directed by Bill Condon'
    },8000)

    setTimeout(function(){
      title.style.opacity = '0';
    },11000)

    setTimeout(function(){
      title.style.opacity = '1'
      title.innerHTML = 'In Theaters, March 17'
    },12000)

  },12000);
}