$(function(){
  const navbar = $('.header-inner');
  $(window).scroll(function(){
    if($(window).scrollTop() <=200){
      navbar.removeClass('navbar-scroll');
    }else{
      navbar.addClass('navbar-scroll');
    }
  });
});
