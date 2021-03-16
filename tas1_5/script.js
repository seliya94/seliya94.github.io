var openContent = document.querySelector('.b-content__btn'); 
var hiddenItems = document.querySelectorAll(".m-content__item--hidden");
let nameBtn = document.querySelector('.b-btn-content__name');
const mediaQuery320 = window.matchMedia('(max-width: 767px)'); 
const mediaQuery768 = window.matchMedia('(min-width: 768px)');
var swiperItems = document.querySelectorAll(".m-content__item");
var swiperContainer = document.querySelector(".m-content");
var swiperWrapper = document.querySelector(".swiper-wrapper");

var opened = 0;


openContent.addEventListener('click', function () {
   if(opened == 0){ 
    for(var i=0;i<hiddenItems.length;i++){
               var current = hiddenItems[i]; 
              current.classList.remove("m-content__item--hidden");
             }
    openContent.classList.add('b-content__btn--close');
    opened = 1;
     nameBtn.textContent = 'Скрыть';
   }
  else{
   for(var i=0;i<hiddenItems.length;i++){
         var current = hiddenItems[i]; 
         current.classList.add("m-content__item--hidden"); 
             }
    openContent.classList.remove('b-content__btn--close');
    opened = 0;    
     nameBtn.textContent = 'Показать все';
}
}
);



  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
      
      
    });

function handleTabletChange(e) {
    if ( mediaQuery768.matches){
         swiperContainer.classList.remove("swiper-container");
         for(var i=0;i<swiperItems.length;i++){
         var curr = swiperItems[i]; 
         curr.classList.remove("swiper-slide"); 
             }
    }
}

mediaQuery768.addListener(handleTabletChange);
handleTabletChange(mediaQuery768);

function handleTabletChangeTwo(e) {
    if ( mediaQuery320.matches){
         swiperContainer.classList.add("swiper-container");
         for(var i=0;i<swiperItems.length;i++){
         var curr = swiperItems[i]; 
         curr.classList.add("swiper-slide"); 
             }
    }
}

mediaQuery320.addListener(handleTabletChangeTwo);
handleTabletChangeTwo(mediaQuery320);

