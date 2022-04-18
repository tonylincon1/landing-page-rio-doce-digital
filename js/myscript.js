var fixed_menu = true;
window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);

});



/*-----------------------------------------------------------------------------------*/
/*	NICESCROLL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery("body").niceScroll({
		cursorcolor:"#333",
		cursorborder:"0px",
		cursorwidth :"8px",
		zindex:"9999"
	});
});



	


/*-----------------------------------------------------------------------------------*/
/*	FLEXSLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	//Top Slider
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: true,
		animationLoop: false,
		slideshow: false,
		prevText: "",
		nextText: "",
		sync: "#carousel"
	});
	$('#carousel').flexslider({
		animation: "fade",
		controlNav: false,
		animationLoop: false,
		directionNav: false,
		slideshow: false,
		itemWidth: 100,
		itemMargin: 5,
		asNavFor: '.top_slider'
	});
	
	homeHeight();
	
	
	jQuery('.flexslider.top_slider .flex-direction-nav').addClass('container');
	
	
	//Vision Slider
	$('.flexslider.portfolio_single_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: true,
		animationLoop: false,
		slideshow: false,
	});
	
	
});

jQuery(window).resize(function(){
	homeHeight();
	
});

jQuery(document).ready(function(){
	homeHeight();
	
});

function homeHeight(){
	var wh = jQuery(window).height() - 80;
	jQuery('.top_slider, .top_slider .slides li').css('height', wh);
}









/*-----------------------------------------------------------------------------------*/
/*	OWLCAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	//WORKS SLIDER
    var owl = $(".owl-demo.projects_slider");

    owl.owlCarousel({
		navigation: true,
		pagination: false,
		items : 4,
		itemsDesktop : [1000,4],
		itemsDesktop : [600,3]
	});
	
	
	//TEAM SLIDER
    var owl = $(".owl-demo.team_slider");

    owl.owlCarousel({
		navigation: true,
		pagination: false,
		items : 3,
		itemsDesktop : [600,2]
	});
	
	
	
	jQuery('.owl-controls').addClass('container');
	
	
	//TESTIMONIALS SLIDER
    var owl = $(".owl-demo.testim_slider");

    owl.owlCarousel({
		itemsCustom : [
			[0, 1]
        ],
		navigation: false,
		pagination: true,
		items : 1
	});
	
	
	
	jQuery('.owl-controls').addClass('container');
	
	
});








/*-----------------------------------------------------------------------------------*/
/*	IFRAME TRANSPARENT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
});







/*-----------------------------------------------------------------------------------*/
/*	BLOG MIN HEIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	blogHeight();
});

jQuery(window).resize(function(){
	blogHeight();
});

function blogHeight(){
	if ($(window).width() > 991){
		var wh = jQuery(window).height() - 80;
		jQuery('#blog').css('min-height', wh);
	}
	
}







/*-----------------------------------------------------------------------------------*/
/*	FOOTER HEIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	contactHeight();
});

jQuery(window).resize(function(){
	contactHeight();
});

function contactHeight(){
	if ($(window).width() > 991){
		var wh = jQuery('footer').height() + 70;
		jQuery('#contacts').css('min-height', wh);
	}
	

}





/*-----------------------------------------------------------------------------------*/
/*	FOOTER MAP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.map_show').click(function(){
		jQuery('#map').addClass('showed');
	});
	
	jQuery('.map_hide').click(function(){
		jQuery('#map').removeClass('showed');
	});
});







