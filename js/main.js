(function(){

window.scrollTo(0,document.body.scrollHeight);


$('.myLinkToBot').click(function () {
    console.log("click");
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 1000);
    return false;
});

$('.myMenuLink').click(function () {
    $('html, body').animate({
        scrollBottom:0
    }, '10000');
    return false;
});



$('.gif-show--guyWiggle').on({
    mouseenter: function () {

        // $(this).css({background-color: black});
         $(this).css("opacity", "1");

    },

    mouseleave: function () {
         $(this).css("opacity", "0");
    }
 })


$('.gif-show--snake').on({
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
        $(this).css("color", "#5c3d2e;");

    },

    mouseleave: function () {
        $('.gif-show--elf').css("opacity", "0");
         $(this).css("color", "black");

    }
});

$('.textbox').on({
    mouseenter: function () {
        // $(this).css({background-color: black});
        $(this).css("color", "#5c3d2e;");

    },

    mouseleave: function () {
        $('.gif-show--elf').css("opacity", "0");
         $(this).css("color", "black");

    }
});

$('.plainBottom').on({
    mouseenter: function () {
        // $(this).css({background-color: black});
        $(this).css("color", "#black;");

    },

    mouseleave: function () {
         $(this).css("color", "fcd600");

    }
});





})();
