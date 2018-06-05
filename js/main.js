
var pictures =   Array.prototype.slice.call(document.getElementsByClassName("article__img"));
var picturesWrapp =  document.querySelector(".pictureswrapper");
var modal = document.querySelector('.modal');
var burger = document.querySelector('.header__burger');
var close = document.querySelector('.close');
var nav = document.getElementsByClassName('js-nav__list');
var MenuItems=[];
var MenuItemsModal=[];

addPic(pictures, picturesWrapp);

MenuItems=Array.prototype.slice.call(document.getElementsByClassName('js-nav__list'));
MenuItemsModal = cloneNodeClass(MenuItems);
burger.addEventListener('click', initBurger); 
close.addEventListener('click', closeBurger); 
for (i = 0; i < MenuItemsModal.length; i++) {
  MenuItemsModal[i].addEventListener('click', closeBurger);
}


function initBurger(){

  for (var i = 0; i < MenuItemsModal.length; i++) {
      modal.appendChild(MenuItemsModal[i]); 
    }

  modal.className += " opened";
  for (var i = 0; i < MenuItemsModal.length; i++) {
    MenuItemsModal[i].className +=" nav-open";
    }
}


//ADD SLIDER

$(document).ready(function(){
  //  $(".navigation__item").scrollTop(20);
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        margin:10,
        animateInClass: true,
        dots: false,
        navText: ["<img src='img/arrowleft.png'>", "<img src='img/arrowright.png'>"],
    });
  });

  function addPic(pictures, wrrapper){
    pictures.sort(function(a,b){
      return a.dataset.number - b.dataset.number;
    });
  
    pictures.forEach(function(item, i, pictures) {
      var item2 = item.cloneNode(true);
      item2.classList.add("article__img-small");
      wrrapper.appendChild(item2);
    });

}

function cloneNodeClass(arr){
    var arr2=[];
    for (var i = 0; i < arr.length; i++) {
        arr2[i]=arr[i].cloneNode(true);
      }
    return arr2;
}

function closeBurger(){
  modal.classList.remove('opened');
}