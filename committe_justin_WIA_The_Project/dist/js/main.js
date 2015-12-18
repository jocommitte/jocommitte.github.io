$(document).ready(function() {

    $('video').hide();
    $("#hide").click(function(){
        $("video").hide();
    });

    $("#show").click(function(){
        $("video").show();

    });
    $('.gallery_thumbnails a').click(function(e){

        //disable links
        e.preventDefault();

        //create variables to hold links from the thumbnail
        var photo_fullsize = $(this).attr("href");
        var photo_caption = $(this).attr("title");

        //create preview link
        var photo_preview = photo_fullsize.replace("_fullsize","_preview");

        //slide up our caption
        $(".gallery_caption").slideUp(500);
        //fade out preview area
        $(".gallery_preview").fadeOut(500,function(){
            //preload clicked image
            $(".gallery_preload_area").html('<img src="'+photo_preview+'"/>');//put image into our html

            //once image is preloaded we can use it
            //test for it with forin space preloader
            $(".gallery_preload_area img").imgpreload(function(){
                //change picture and link for picture area
                $('.gallery_preview').html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" ' +
                    'style="background-image:url('+photo_preview+');"></a>');

                //fade in preview window
                $(".gallery_preview").fadeIn(500);

                //build the captions
                $(".gallery_caption").html('<p><a class="overlayLink zoom" title="' +photo_caption +'" href="' + photo_fullsize+'"> View Larger</a></p><p>'+photo_caption+'</p>');

                //slide down caption
                $('.gallery_caption').slideDown(500);

                //must call set fancyBox Function
                setFancyBoxLinks();

                //call update thumbnails
                updateThumbnails();
            });

        });
    });//end of click
    //create first variables
    var first_photo_caption =  $('.gallery_thumbnails a').first().attr("title");
    var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
    var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");

    //set caption and the photo
    $('.gallery_preview').html('<a class="overlayLink" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'" ' +
        'style="background-image:url('+first_photo_preview+');"></a>')

    $(".gallery_caption").html('<p><a class="overlayLink zoom" title="' +first_photo_caption +'" href="' + first_photo_fullsize+'"' +
        '> View Larger</a></p><p>'+first_photo_caption+'</p>');

    setFancyBoxLinks();
    updateThumbnails();

});//end of ready
function setFancyBoxLinks(){
    $("a.overlayLink").fancybox({

        //setup title position
        'titlePosition': 'over',
        'overlayColor' :'#000',
        'overlayOpacity':.8,
        'transitionIn' : 'elastic',
        'transitionOut': 'elastic',
        'autoScale' : true

    });

}

function updateThumbnails(){
    //target all thumbnails and make sure the other ones arent selected then fade that one
    $(".gallery_thumbnails a").each(function(index){
        //test to see if links that is clicked is the chosen link
        if($('.gallery_preview a').attr("href")==$(this).attr("href")){

            //if anchor tag is same as previous
            //shade the thunbnail and give class of selected

            $(this).addClass("selected");
            $(this).children().fadeTo(250,.4);

        }else{
            //remove selected class and fadeUp to 100% opacity
            $(this).removeClass('selected');
            $(this).children().css("opacity","1");

        }

    });

}
if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}

/* fix vertical when not overflow
 call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
// set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
// variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
// overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
// remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
// set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
// fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
//
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

/* set parallax background-position */
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
// only when in range
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
// min when image touch top of window
            var min = 0;
// max when image touch bottom of window
            var max = - imgH + heightWindow;
// overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
// value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
// set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
//$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}



