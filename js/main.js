(function(){
// setTimeout(function() {
//     window.scrollTo(0,document.body.scrollHeight);
// }, 5000);

var img = new Image();
img.onload = function() {
    // when this has loaded
    // add iamge
    $('.fullscreen__image--building').attr('src', img.src);
    // show image
    $('.fullscreen__image--container').removeClass('fullscreen__hidden');
    // hide spinner
    $('.loader').addClass('fullscreen__hidden');
    // jump to bottom
    window.scrollTo(0,document.body.scrollHeight);
}

img.src = "https://dl.dropboxusercontent.com./s/s5pt5ufz4roeoxa/IMAGETEST.png?dl=0";
// img.src = "https://dl.dropboxusercontent.com./s/s5pt5ufz4roeoxa/IMAGETEST.png?dl=0";


$('.myLinkToBot').click(function () {
    $('html, body').animate({
        scrollBottom: $(document).height()
    }, 'slow');
    return false;
});

$('.myMenuLink').click(function () {
    $('html, body').animate({
        scrollBottom:0
    }, 'slow');
    return false;
});

$('.gif-show--elf').on({
    mouseenter: function () {

        // $(this).css({background-color: black});
         $(this).css("opacity", "1");

    },

    mouseleave: function () {
         $(this).css("opacity", "0");
    }
})



$('.textbox--no1A').on({
    mouseenter: function () {
        // $(this).css({background-color: black});
        $('.gif-show--elf').css("opacity", "1");
        $(this).css("color", "red")

    },

    mouseleave: function () {
        $('.gif-show--elf').css("opacity", "0")
         $(this).css("color", "#5c3d2e")

    }
})


// $('.gif-show').hover(function(){
//     console.log('test', $(this));
//     $(this).css("opacity", "0");
    
// })


})()
