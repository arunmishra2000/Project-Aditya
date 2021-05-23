
let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let sidewalk = document.getElementById("sidewalk");
let car = document.getElementById("car");

window.addEventListener('scroll',function(){
  var value = window.scrollY; 
  bg.style.top = value*0.5 + 'px';
  mountain.style.top = value*0.55 + 'px';
  road.style.top = -value*0.15 + 'px';
  text.style.top = -value*0.64 + 'px';
  car.style.top = value*0.2 + 'px';
  sidewalk.style.top = -value*0.18 + 'px';
})

