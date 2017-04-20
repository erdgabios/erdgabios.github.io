//$('#exCollapsingNavbar').on('click', 'a:not(.dropdown-toggle)', function (e) {
//    $('#exCollapsingNavbar.in').collapse('hide');
//    
//});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

//var $logo = $("#logo");
//  $logo.on("click", function(e) {
//    $('#exCollapsingNavbar.in').collapse('hide');  
//    $logo.toggleClass("is-active");
//    // Do something else, like open/close menu
//  });

$('#exCollapsingNavbar').on('click', 'a:not(.dropdown-toggle)', function (e) {
    $('#exCollapsingNavbar.in').collapse('hide');
    $hamburger.toggleClass("is-active");
    //$logo.toggleClass("is-active");
});

