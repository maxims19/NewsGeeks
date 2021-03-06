function displayNavInfos(){
	var windowSize = $( window ).width();
	if(windowSize <= 1000 && windowSize >= 750)
		$(".navbar-right").hide();
	else
		$(".navbar-right").show();
}

$(function(){
	$( ".article" ).hide();
	$(document).ready(displayNavInfos);
	$(document).ready(function(){
		$(".article").show("fold", {}, 500);
	})
	$(window).resize(displayNavInfos);


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var pagewrapper2 = '#top';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '60%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(pagewrapper2).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, #top, .navbar, body, .navbar-header').toggleClass('slide-active');
        $('.navbar-toggle .button-navbar').toggleClass('fa-bars fa-times'); 

    });


    var selected = '#slidemenu, #page-content, #top, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });
});