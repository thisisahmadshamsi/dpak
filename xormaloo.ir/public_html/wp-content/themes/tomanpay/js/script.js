//Scroll to target
$(document).ready(function () {
	if (IRA_isHome == 'true' ){
		$(document).on("scroll", onScroll);
		$('.landing_link a.smooth').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			$('.landing-menu ul li a').removeClass("active");
			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top 
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
			$('a.smooth').removeClass('active');
			$(this).addClass('active');
		});
	}
	
});
$(document).ready(function () {
	$('.scroll-smooth').on('click', function (e) {
		e.preventDefault();
		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
});
function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('.landing-menu a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			currLink.addClass("active");
		}
		else {
			currLink.removeClass("active");
		}
	});
}
//Scroll Function
$(window).scroll(function () {
	if ($(window).scrollTop() >= $('.header').height()) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
});
AOS.init({
	
});
(function () {
	var imgLoad = new LazyLoad({
		class_loading: 'loading_src'
	});
	var backLoad = new LazyLoad({
		elements_selector: ".lazy_back",
	});
}());

//menu
$(document).on('click', ".menu-toggle", function (e) {
	e.preventDefault();
	$('body').addClass("open-nav");
	$('.top-menu').toggleClass("open");
	$('.overlay').toggleClass("show");
});
$(document).on('click', ".overlay,nav.top-menu ul li a,.close_nav,.close_but", function () {
	$(".overlay").removeClass("show");
	$(".top-menu").removeClass("open");
	$('body').removeClass("open-nav");
});
if($('.parallax').length){
	$.parallaxify();
}
if ($('.arrow').length) {
	//viewport
	
	jQuery(document).ready(function () {
		jQuery('.arrow').viewportChecker({
			callbackFunction: function () {
				$(".arrow").each(function () {
				   $(this).addClass('anim');
					
				});
			},
		});
	});
} 
$(".btn-file input").change(function () {
		var fileWrapper = $(this).parents('.btn-file');
		var fileName = $(this).val();
		var clean = fileName.split('\\').pop();
		fileWrapper.find('.up-txt').text(clean)
		fileWrapper.find('i').addClass('selected')
	});
function frameIt(item) {
	var item = $(item);
	var item_img = item.find('img');
	var src_new = item_img.attr('src');
	var frame = $('.frame_inner');
	var current_frame_src = frame.find('img').attr('src');

	item.addClass('selected').siblings().removeClass('selected');
	setTimeout(function () { 
		item_img.attr('src', current_frame_src);
		frame.find('img').fadeOut(50, function () {
			frame.find('img').attr('src', src_new);
		}).fadeIn(200);
	 }, 200);
	
	
	

}
$(document).ready(function() {
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('active');
  });
});