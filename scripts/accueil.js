/*let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click' , function() {
    etape++;
    if(etape >= nbr__img ){
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0){
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}
)

setInterval(function() {
    etape++;
    if(etape >= nbr__img){
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
},3000)*/

var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if(screen.width > 990){
   itemDisplay = document.getElementsByClassName(slider-container)[0].getAttribute("item-display-d");
   margin = itemDisplay * 5;
}
if(screen.width > 700 && screen.width < 990){
   itemDisplay = document.getElementsByClassName(slider-container)[0].getAttribute("item-display-t");
   margin = itemDisplay * 6.8;
}
if(screen.width > 280 && screen.width < 700){
   itemDisplay = document.getElementsByClassName(slider-container)[0].getAttribute("item-display-m");
   margin = itemDisplay * 20;
}

var item = document.getElementsByClassName("item");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) -1;
for(let i=0; i<item.length; i++){
   item[i].style.width = (screen.width / itemDisplay) - margin + "px";
}
 

function prev(){
   if(inc !== itemSlide + itemleft){
       if(inc === itemSlide){
           inc = inc + itemleft;
           count = count -(screen.width / itemDisplay) * itemleft;
       }
       else{
           inc ++;
           count = count - screen.width;
       }
   }
   count = count - screen.width;
   slider.style.left = - count + "px";
}  

function next(){
   if(inc !== 0){
       if(inc === itemleft){
           inc = inc - itemleft;
           count = count +(screen.width / itemDisplay) * itemleft;
       }
       else{
           inc --;
           count = count + screen.width;
       }
   }
   count = count - screen.width;
   slider.style.left =  count + "px";
}



