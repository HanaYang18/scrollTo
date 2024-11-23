$(document).ready(function(){
  
  $(".sub_menu1").hide();
  var showcon = false;
  $(".left_menu1").mouseover(function(){
    $(".sub_menu1").stop().slideDown();
  });
  $(".left_menu1").mouseout(function(){
    $(".sub_menu1").stop().slideUp();
  });

  $(".sub_menu2").hide();
  var showcon = false;
  $(".left_menu2").mouseover(function(){
    $(".sub_menu2").stop().slideDown();
  });
  $(".left_menu2").mouseout(function(){
    $(".sub_menu2").stop().slideUp();
  });

  $(".sub_menu3").hide();
  var showcon = false;
  $(".left_menu3").mouseover(function(){
    $(".sub_menu3").stop().slideDown();
  });
  $(".left_menu3").mouseout(function(){
    $(".sub_menu3").stop().slideUp();
  });

});