$(document).ready(function() { 
    $('.hero-content h3').click(function(){
      var subText = $(this).text();
       $(this).text(subText + "!");
       $("h3").hover(function(){
    $("h3").css("color","blue");
    },function(){
    $("h3").css("color","red");

});
    });
 
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
    $('.selling-points .point').hover(onHoverAction, offHoverAction);
     $("p").on("click",function(){
    $(this).animate({fontSize:"+=2px"});
  });

     $( "h1" ).click(function() {
  $( "h1" ).fadeOut( "slow");
});
});