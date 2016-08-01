/**	
	* Template Name: Rex
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	0. IAS HEADER
	1. HEADER CONTENT SLIDE
	2. FIXED MENU
	3. COUNTER
	4. TESTIMONIAL SLIDE (SLICK SLIDER)
	5. CLIENT SLIDE (SLICK SLIDER)
	6. SCROLL TOP BUTTON
	7. MENU SMOOTH SCROLLING
	8. MIXIT FILTER ( FOR PORTFOLIO )  
	9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	10. MOBILE MENU CLOSE
	11. INSTAGRAM SLIDER (SLICK SLIDER)
	12. WOW ANIMATION
	
**/


/* ----------------------------------------------------------- */
/*  0. IAS HEADER
/* ----------------------------------------------------------- */


var heigthHeader = 0;
var menuHeigth = 100;

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
        marginTopText = (heigthHeader / 2) - ($(".header-ias .carousel-inner .item div").height() / 2) - 5;
    }

    $(".header-ias .carousel-inner .item div").css({
        marginTop: marginTopText,
        "margin-top": marginTopText
    });
}



jQuery(function($){

    if ($("#input-cv").length) {
        $("#input-cv").fileinput({
            language: "es",
            allowedFileExtensions: ["doc", "docx", "pdf"]
        });
    }

	/* ----------------------------------------------------------- */
	/*  1. HEADER CONTENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.header-slide').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:false, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'span',
		fade: true,
		cssEase: 'linear'
	});

	/*jQuery('.header-content span').animate({
		'margin-top': (jQuery('.header-content').height() / 2 ) - (jQuery('.header-content span').height() / 2 )
	});*/

	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 700) {
        $('.main-navbar').addClass('navbar-fixed-top');
        $('.logo').addClass('logo-compressed');
        $('.main-nav li a').addClass('less-padding');
        
        
	    } else {
	        $('.main-navbar').removeClass('navbar-fixed-top');
	        $('.logo').removeClass('logo-compressed');
	        $('.main-nav li a').removeClass('less-padding');
	    }
	});

	/* ----------------------------------------------------------- */
	/*  3. COUNTER
	/* ----------------------------------------------------------- */

	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* ----------------------------------------------------------- */
	/*  4. TESTIMONIAL SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 1500,
		arrows:true, 
		autoplay: true,
		autoplaySpeed: 5000,
      	slidesToShow: 1,
		slide: 'div',		
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  5. CLIENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	$('.client-table').slick({
	  dots: false,
	  infinite: true,
	  arrows:false, 
	  speed: 300,
	  autoplay: true,     
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  6. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  jQuery(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  jQuery('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".main-nav"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=#"+id+"]").parent().addClass("active");
		   }           
		})

	/* ----------------------------------------------------------- */
	/*  8. MIXIT FILTER ( FOR PORTFOLIO ) 
	/* ----------------------------------------------------------- */ 

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	    
		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});	 

	/* ----------------------------------------------------------- */
	/*  10. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

	jQuery('.navbar-nav').on('click', 'li a', function() {
	  $('.in').collapse('hide');
	});

    /* ----------------------------------------------------------- */
	/*  11. INSTAGRAM SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */ 

	jQuery('.instagram-feed').slick({
		dots: true,
		infinite: true,
		speed: 500,
		arrows:true, 
		autoplay: true,
      	slidesToShow: 1,
		slide: 'div',		
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  12. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

    /*jQuery(window).resize(function(){
        jQuery('.header-content span').animate({
            'margin-top': (jQuery('.header-content').height() / 2 ) - (jQuery('.header-content span').height() / 2 )
        });
    });*/

});