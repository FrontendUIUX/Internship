$(".carousel-buttons button").click(function(){
   var index = $(this).text() - 1; 
   $('#myCarousel').carousel(index);
});
