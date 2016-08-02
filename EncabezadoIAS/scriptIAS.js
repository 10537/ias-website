var heigthHeader = 0;
var menuHeigth = 70;

$(document).ready(function() {

    $(window).resize(function() {
        init();
        asignHeader();
    });

    init();
    asignHeader();
    
});

function init(){
    if($(window).height() > window.innerHeight){
        heigthHeader = $(window).height() - menuHeigth;
    } else {
        heigthHeader = window.innerHeight - menuHeigth;
    }
}

function asignHeader(){
    $(".header-ias").height(heigthHeader);
    $(".header-ias").width("100%");
    
    var marginTopText = 10;
    if(((heigthHeader / 2) - ($(".header-ias .carousel-inner .item div").height() / 2)) > 10){
        marginTopText = (heigthHeader / 2) - ($(".header-ias .carousel-inner .item div").height() / 2);
    }
    
    $(".header-ias .carousel-inner .item div").css({
        marginTop: marginTopText,
        "margin-top": marginTopText
    });
    
}