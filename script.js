$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("ativo");
        }else{
            $('.navbar').removeClass("ativo");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
});
/*var doc = new Document();
var window = doc.defaultView;

doc.addEventListener("DOMContentLoaded", function() {
  var navbar = doc.querySelector('.navbar');
  var scrollUpBtn = doc.querySelector('.scroll-up-btn');
  var menuBtn = doc.querySelector('.menu-btn');
  var menu = doc.querySelector('.navbar .menu');
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
      navbar.classList.add("ativo");
    } else {
      navbar.classList.remove("ativo");
    }
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });
  
  scrollUpBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  
  menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuBtn.querySelector('i').classList.toggle("active");
  });
});*/
