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


  var pictures =   Array.prototype.slice.call(document.getElementsByClassName("article__img"));
  var picturesWrapp =  document.querySelector(".pictureswrapper");

pictures.sort(function(a,b){
  return a.dataset.number - b.dataset.number;
});

pictures.forEach(function(item, i, pictures) {
  var item2 = item.cloneNode(true);
  item2.classList.add("article__img-small");
  picturesWrapp.appendChild(item2);
});