
import Swiper from 'swiper';
    // core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);

 var openContentFirst = document.querySelector('.sw1-b-content__btn--first');
 var openContentSecond = document.querySelector('.sw1-b-content__btn--second');  
 var openText = document.querySelector('.b-content__btn');
 var sliderOne = document.querySelector('.slider--one');
 var sliderTwo = document.querySelector('.slider--two');
 var sliderThree = document.querySelector('.slider--three');
 var hiddenText768 =  document.querySelector('.b-content__desc--appear--768');
 var hiddenText1120 =  document.querySelector('.b-content__desc--appear--1120');
 var hiddenText =  document.querySelector('.b-content__desc--hidden');
var hiddenItemsOne = document.querySelectorAll(".slider--one >.swiper-wrapper >.sw1-m-content__item--hidden");
var hiddenItemsTwo = document.querySelectorAll(".slider--two >.swiper-wrapper >.sw1-m-content__item--hidden");
let nameBtnFirst = document.querySelector('.sw1-b-btn-content__name--first');
let nameBtnSecond = document.querySelector('.sw1-b-btn-content__name--second');
const mediaQuery320 = window.matchMedia('(max-width: 767px)'); 
const mediaQuery768 = window.matchMedia('(min-width: 768px)');
const mediaQuery1439 = window.matchMedia('(max-width: 1439px)');
const mediaQuery1440 = window.matchMedia('(min-width: 1440px)');
var swiperItems = document.querySelectorAll(".sw1-m-content__item");
var swiperContainer = document.querySelector(".sw1-m-content");
var btnBurger = document.querySelector(".h-button__btn:only-child");
var btnPhone = document.querySelector(".h-button--position--end > .h-button__btn:first-child");
var btnFeedback = document.querySelector(".h-button--position--end > .h-button__btn:nth-child(2)");
var btnPhoneMenu = document.querySelector(".m-f-button__btn--call");
var btnFeedbackMenu = document.querySelector(".m-f-button__btn--feedback");
var btnBurgerClose = document.querySelector(".m-h-button__btn--first");
var btnPhoneClose = document.querySelector(".m-h-button__btn--second");
var btnFeedbackClose = document.querySelector(".m-h-button__btn--third");
var popupMenu = document.querySelector(".pop-up__first");
var popupPhone = document.querySelector(".pop-up__second");
var popupFeedback = document.querySelector(".pop-up__third");

var btnBurgerCloseBlur = document.querySelector(".pop-up__first > .pop-up__blur");
var btnPhoneCloseBlur = document.querySelector(".pop-up__second > .pop-up__blur");
var btnFeedbackCloseBlur = document.querySelector(".pop-up__third > .pop-up__blur");


var openedTxt = 0;
var openedOne = 0;
var openedTwo = 0;


openText.addEventListener('click', function () {
   if(openedTxt == 0){ 
    hiddenText768.classList.remove('b-content__desc--appear--768'); 
    hiddenText1120.classList.remove('b-content__desc--appear--1120'); 
    hiddenText.classList.remove('b-content__desc--hidden'); 
    openText.classList.add('b-content__btn--close');
    openedTxt = 1;
     openText.textContent = 'Скрыть';
   }
  else{
    hiddenText768.classList.add('b-content__desc--appear--768'); 
    hiddenText1120.classList.add('b-content__desc--appear--1120'); 
    hiddenText.classList.add('b-content__desc--hidden');
    openText.classList.remove('b-content__btn--close');
    openedTxt = 0;    
     openText.textContent = 'Читать далее';
}
}
); 


   
btnBurger.addEventListener('click', function () {
    popupMenu.classList.add('pop-up__open');
}
)

btnPhone.addEventListener('click', function () {
    popupPhone.classList.add('pop-up__open');
}
)


btnFeedback.addEventListener('click', function () {
    popupFeedback.classList.add('pop-up__open');
}
)

btnPhoneMenu.addEventListener('click', function () {
    popupPhone.classList.add('pop-up__open');
}
)

btnFeedbackMenu.addEventListener('click', function () {
    popupFeedback.classList.add('pop-up__open');
}
)

btnBurgerClose.addEventListener('click', function () {
    popupMenu.classList.remove('pop-up__open');
}
)


btnPhoneClose.addEventListener('click', function () {
    popupPhone.classList.remove('pop-up__open');
}
)

btnFeedbackClose.addEventListener('click', function () {
    popupFeedback.classList.remove('pop-up__open');
}
)

btnBurgerCloseBlur.addEventListener('click', function () {
    popupMenu.classList.remove('pop-up__open');
}
) 

btnPhoneCloseBlur.addEventListener('click', function () {
    popupPhone.classList.remove('pop-up__open');
}
) 


btnFeedbackCloseBlur.addEventListener('click', function () {
    popupFeedback.classList.remove('pop-up__open');
}
) 



openContentFirst.addEventListener('click', function () {
   if(openedOne == 0){ 
    for(var i=0;i<hiddenItemsOne.length;i++){
               var current = hiddenItemsOne[i]; 
              current.classList.remove("sw1-m-content__item--hidden");
             }
    openContentFirst.classList.add('sw1-b-content__btn--close--first');
    openedOne = 1;
     nameBtnFirst.textContent = 'Скрыть';
          if(!mediaQuery1440.matches){
     sliderOne.style.height = 340 + 'px';
          }
          else{
              sliderOne.style.height = 250 + 'px';
          }
   }
  else{
   for(var i=0;i<hiddenItemsOne.length;i++){
         var current = hiddenItemsOne[i]; 
         current.classList.add("sw1-m-content__item--hidden"); 
             }
    openContentFirst.classList.remove('sw1-b-content__btn--close--first');
    openedOne = 0;    
     nameBtnFirst.textContent = 'Показать все';
     sliderOne.style.height = 160 + 'px';

}
}
);



openContentSecond.addEventListener('click', function () {
   if(openedTwo == 0){ 
    for(var i=0;i<hiddenItemsTwo.length;i++){
               var current = hiddenItemsTwo[i]; 
              current.classList.remove("sw1-m-content__item--hidden");
             }
    openContentSecond.classList.add('sw1-b-content__btn--close--second');
    openedTwo = 1;
     nameBtnSecond.textContent = 'Скрыть';
     sliderTwo.style.height = 680 + 'px';
         if(mediaQuery1440.matches){
     sliderTwo.style.height = 520 + 'px';}
   }
  else{
   for(var i=0;i<hiddenItemsTwo.length;i++){
         var current = hiddenItemsTwo[i]; 
         current.classList.add("sw1-m-content__item--hidden"); 
             }
    openContentSecond.classList.remove('sw1-b-content__btn--close--second');
    openedTwo = 0;    
     nameBtnSecond.textContent = 'Показать все';
     sliderTwo.style.height = 160 + 'px';

}
}
);


  const swiper = new Swiper('.slider--one', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
      
      
    });

  const swiper2 = new Swiper('.slider--two', {
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
          sliderOne.style.height = 160 + 'px';
          if(nameBtnSecond.textContent == 'Скрыть'){
                 sliderTwo.style.height = 680 + 'px';
          }
          if(nameBtnFirst.textContent == 'Скрыть'){
                 sliderOne.style.height = 340 + 'px';
          }
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
         sliderOne.style.height = 120 + 'px';
         sliderTwo.style.height = 160 + 'px'; 
    }
}

mediaQuery320.addListener(handleTabletChangeTwo);
handleTabletChangeTwo(mediaQuery320);


function handleTabletChangeThree(e) {
    if ( mediaQuery1440.matches){
         
          if(nameBtnSecond.textContent == 'Скрыть'){
                 sliderTwo.style.height = 520 + 'px';
          }
        }
  
}

mediaQuery1440.addListener(handleTabletChangeThree);
handleTabletChangeThree(mediaQuery1440);

function handleTabletChangeFour(e) {
    if ( mediaQuery1439.matches){
         
          if(nameBtnSecond.textContent == 'Скрыть'){
                 sliderTwo.style.height = 680 + 'px';
          }
        }
  
}

mediaQuery1439.addListener(handleTabletChangeFour);
handleTabletChangeFour(mediaQuery1439);




