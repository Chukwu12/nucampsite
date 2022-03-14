$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

console.log("my script js file is being read");

   $("#reserveButton").on("click", function() {

       console.log("reserved button clicked");
       $("#reserveModal").modal("show");
   });

   $("#loginButton").on("click", function() {

       console.log("loginButton clicked");
       $("#loginModal").modal("show");

   });


function testButtonClick () {

}

});
