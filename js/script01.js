$(document).ready(function(){
  $('.heart').click(function(){
    $(this).toggleClass('heart_r');
  });
  $('.search_bar').hide();
  $('.search').click(function(){
    $('.search_bar').toggle()
  });
  $('#menu_bar').click(function () {
    $('#ham_menu').slideToggle()
  });
  $('#sec1>ul>li').on('click', function () {
    $(this).toggleClass('clickE');
    $(this).siblings().removeClass('clickE');
  });
});    // jQuery end
