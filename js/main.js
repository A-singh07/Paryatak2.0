// --------- NAV ----------

var menuContainer = $(".menu-container");
var leftMenu = $(".left-side-menu");
var rightMenu = $(".right-side-menu");

//Rotate on hover
$(".hamline").hover(
    function () {
        $(this).css("transform", "rotate(180deg)");
    }, function () {
        $(this).css("transform", "rotate(0deg)");
    }
);

$(".hamclose").hover(
    function () {
        $(this).css("transform", "rotate(180deg)");
    }, function () {
        $(this).css("transform", "rotate(0deg)");
    }
);

// open Menu
$(".hamline").click(function () {
    $(this).css("display", "none");
    $(".hamclose").css("display", "flex");
    menuContainer.css("width", "100vw");
    menuContainer.css("left", "0");
    leftMenu.css("transform", "translateX(0)");
    rightMenu.css("transform", "scale(1)");
    $(".right-side-menu img").css("borderRadius", "2em");
});

// Close menu
$(".hamclose").click(function () {
    $(this).css("display", "none");
    $(".hamline").css("display", "flex");
    menuContainer.css("width", "0");
    menuContainer.css("left", "-100px");
    leftMenu.css("transform", "translateX(-300px)");
    rightMenu.css("transform", "scale(0)");
    $(".right-side-menu img").css("borderRadius", "100%");
});


// ------- LOGIN ----------

var loginWrapper = $(".login-wrapper");
var loginOpen = $(".login-open");
var closeLogin = $(".close-login");
var loginModal = $("#login-modal");
var registerOpen = $(".register-open")
var registerModal = $("#register-modal");

loginWrapper.hide();

loginOpen.click(function () {
    loginWrapper.show();
    loginModal.show();
    registerModal.hide();
});

registerOpen.click(function () {
    registerModal.show();
    loginModal.hide();
});

closeLogin.click(function () {
    loginWrapper.hide();
    loginModal.hide();
    registerModal.hide();
});



// ------- Section/Explore --------

var detailModal = $(".detail-modal");
var modalContent = $(".modal-content");
var card = $(".card");
var closeModal = $(".close-modal");

//Default hiding all Detail modal
for (let i = 1; i <= detailModal.length; i++) {
    $("#place" + i + "-modal").hide();
}

card.click(function () {
    $("#" + this.id + "-modal").show();
})

closeModal.click(function () {
    $("#" + this.id + "-modal").hide();
});

