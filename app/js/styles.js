$(document).ready(function() {

    $(".side-menu-item").on("click", function(e){
        e.preventDefault();
        $(this).closest("ul").find(".side-menu-item").removeClass("active");
        $(this).closest("ul").find("ul").slideUp(300);
        $(this).addClass("active");
        $(this).closest("li").children("ul").slideDown(300);
    });


    $(".btn-muted").on("click", function(e) {
        e.preventDefault();
    });

    $("input, select").styler();

    $(".input-text__disabled").val("Test");

    $(".popup-trigger").on("click", function(e) {
        e.preventDefault();
        $(".popup").bPopup();
    });



})