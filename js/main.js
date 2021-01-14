// ------- NAV ------

$(".hamline").click(function () {
    $(this).css("display", "none");
    $(".hamclose").css("display", "flex");
    $(".menu-container").css("width", "100vw");
    $(".menu-container").css("left", "0");
    $(".left-side-menu").css("transform", "translateX(0)");
    $(".right-side-menu").css("transform", "scale(1)");
    $(".right-side-menu img").css("borderRadius", "2em");
});

$(".hamclose").click(function () {
    $(this).css("display", "none");
    $(".hamline").css("display", "flex");
    $(".menu-container").css("width", "0");
    $(".menu-container").css("left", "-100px");
    $(".left-side-menu").css("transform", "translateX(-300px)");
    $(".right-side-menu").css("transform", "scale(0)");
    $(".right-side-menu img").css("borderRadius", "100%");
});