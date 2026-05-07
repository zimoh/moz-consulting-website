

$(document).ready(function () {

//  ========  header=====  //
    $('.navbar-expand-toggle').on('click', function() {
       $(this).toggleClass('open');
     });
    $(".navbar-expand-toggle , .close-menu-icon").on('click', function () {
         $(".app-container").toggleClass("expanded");
         $('body').toggleClass('body-toogle-menu');
         return false;
    });
    $('body').click(function(e){
           var menu_contain = $(".side-menu");
           // if the target of the click isn't the container nor a descendant of the container
           if (!menu_contain.is(e.target) && menu_contain.has(e.target).length === 0)
           {
             $('body').removeClass("body-toogle-menu");
             $('.app-container').removeClass("expanded");
           }
     });

    $('.craft-content-page p').matchHeight({property:'height'});
    $('.craft-pages .craft_content h3').matchHeight({property:'height'});
    
    $('#side-menu').metisMenu();

    $(".video_tigger_btn").on("click", function() {
        $(this).parents(".video-fream").addClass("active");
        var e = $(this).parents(".video-fream").find(".videohome-main").data("video");
        var t = $(this).parents(".video-fream").find(".videohome-main").data("mute");
        $(this).parents(".video-fream").find(".videohome-main").html('<iframe height="100%" width="100%" src="' + e + "?autoplay=1&loop=1&playlist=" + e + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        jQuery(".videohome-main").css({
            opacity: "1",
            display: "block"
        });
        jQuery(".videohome-thumb").hide();
        return false
    });

    $(window).scroll(function() {

        var top_of_element = $("#video-section").offset().top;
        var bottom_of_element = $("#video-section").offset().top + $("#video-section").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        
        $('.mainLeft li').each(function() {

            var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));

            if (elementPositionTop >= top_of_element && elementPositionTop <= bottom_of_element ) {
                $(this).addClass('whiteText');
            } else {
                $(this).removeClass('whiteText');
            }
        });
    });

});

