$(document).ready(function(){
  $(".lt:not(.left1)").hide();
  $(".rt:not(.right1)").hide();

  // 1 => 5
  $(".left1 span").click(function(){
    $(".left1").hide();
    $(".right1").hide();
    $(".left5").show();
    $(".right5").show();
  });

  // 5 => 4
  $(".left5 span").click(function(){
    $(".left5").hide();
    $(".right5").hide();
    $(".left4").show();
    $(".right4").show();
  });

  // 4 => 3
  $(".left4 span").click(function(){
    $(".left4").hide();
    $(".right4").hide();
    $(".left3").show();
    $(".right3").show();
  });

  // 3 => 2
  $(".left3 span").click(function(){
    $(".left3").hide();
    $(".right3").hide();
    $(".left2").show();
    $(".right2").show();
  });

  // 2 => 1
  $(".left2 span").click(function(){
    $(".left2").hide();
    $(".right2").hide();
    $(".left1").show();
    $(".right1").show();
  });

  // 1 => 2
  $(".right1 span").click(function(){
    $(".left1").hide();
    $(".right1").hide();
    $(".left2").show();
    $(".right2").show();
  });

  // 2 => 3
  $(".right2 span").click(function(){
    $(".left2").hide();
    $(".right2").hide();
    $(".left3").show();
    $(".right3").show();
  });

  // 3 => 4
  $(".right3 span").click(function(){
    $(".left3").hide();
    $(".right3").hide();
    $(".left4").show();
    $(".right4").show();
  });

  // 4 => 5
  $(".right4 span").click(function(){
    $(".left4").hide();
    $(".right4").hide();
    $(".left5").show();
    $(".right5").show();
  });

  // 5 => 1
  $(".right5 span").click(function(){
    $(".left5").hide();
    $(".right5").hide();
    $(".left1").show();
    $(".right1").show();
  });

});