$(document).ready(function () {
	document.createElement('header');
	document.createElement('nav');
	document.createElement('section');
	document.createElement('article');
	document.createElement('aside');
	document.createElement('footer');
	document.createElement('figure');
	document.createElement('figcaption');
	document.createElement('main');

	// подключение слайдера картинок
	$('.main-slider').slick({
		dots: true,
		autoplay: true,
		fade: true,
	});

	// подключение слайдеров превью товаров
	$('.slider-thumbs').slick({});

	// подключение карусели 6-ти товаров-хитов
	$('.scroll-six-products').slick({});

	// подключение карусели по 4 товара
	$('.scroll-four-products').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4
	});
	
	// Другие модификации товара (карусель в карточке)
	$('.modifications').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

	// подключение карусели пoлного изображения
	$('.big-slider').slick({
		asNavFor: '.thumbsbox'
	});

	// подключение слайдера картинок
	$('.thumbsbox').slick({
		vertical: true,
		slidesToShow: 3,
		asNavFor: '.big-slider',
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true
	});


	//  к сравнению, в избранное (подсветка)
	$(".buttons .compare, .modifications .compare, .results .compare, .product-list .favorite-compare .favorite, .product-list .favorite-compare .compare").click(function () {
		$(this).toggleClass("active");
	});
	$(".buttons .favorite, .at-favorite, .results .favorite").click(function () {
		$(this).toggleClass("active");
	});

	// анимация попап подарка ручки
	$(".open-modal").click(function () {
		$(".overlay").addClass("overlay-on");
		$(".present-1").toggleClass("active godown goup");
	});
	$(".overlay").click(function () {
		$(this).toggleClass("overlay-on");
		$(".present-1").removeClass("active godown");
		$(".present-1").addClass("goup");
	});
	$(".present-1 .close").click(function () {
		$(".overlay").toggleClass("overlay-on");
		$(".present-1").toggleClass("active godown goup");
	});

	// анимация попап подарка шампанское
	$(".open-modal-2").click(function () {
		$(".overlay-2").addClass("overlay-on");
		$(".present-2").toggleClass("active godown goup");
	});
	$(".overlay-2").click(function () {
		$(this).toggleClass("overlay-on");
		$(".present-2").removeClass("active godown");
		$(".present-2").addClass("goup");
	});
	$(".present-2 .close").click(function () {
		$(".overlay-2").toggleClass("overlay-on");
		$(".present-2").toggleClass("active godown goup");
	});

	// анимация "Вы добавили в корзину"
	$(".open-modal-3").click(function () {
		$(".overlay-3").addClass("overlay-on");
		$(".cartpopup").toggleClass("active godown goup");
	});
	$(".overlay-3").click(function () {
		$(this).toggleClass("overlay-on");
		$(".cartpopup").removeClass("active godown");
		$(".cartpopup").addClass("goup");
	});
	$(".cartpopup .close").click(function () {
		$(".overlay-3").toggleClass("overlay-on");
		$(".cartpopup").toggleClass("active godown goup");
	});

	// анимация логин
	$(".open-modal-4").click(function () {
		$(".overlay").addClass("overlay-on");
		$(".loginpopup").toggleClass("active godown goup");
	});
	$(".overlay").click(function () {
		$(this).toggleClass("overlay-on");
		$(".loginpopup").removeClass("active godown");
		$(".loginpopup").addClass("goup");
	});
	$(".loginpopup .close").click(function () {
		$(".overlay").toggleClass("overlay-on");
		$(".loginpopup").toggleClass("active godown goup");
	});

	// анимация быстрого просмотра
	$(".quick-view span").click(function () {
		$(".overlay").addClass("overlay-on");
		$(".quickviewpopup").toggleClass("active godown goup");
	});
	$(".overlay").click(function () {
		$(this).toggleClass("overlay-on");
		$(".quickviewpopup").removeClass("active godown");
		$(".quickviewpopup").addClass("goup");
	});
	$(".quickviewpopup .close").click(function () {
		$(".overlay").toggleClass("overlay-on");
		$(".quickviewpopup").toggleClass("active godown goup");
	});



	$(".plitka").click(function () {
		$(this).addClass("active");
		$(".listing").removeClass("active");
	});

	$(".listing").click(function () {
		$(this).addClass("active");
		$(".plitka").removeClass("active");
	});

	// кнопка вверх -->
	$(function () {
		$.fn.scrollToTop = function () {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() != "0") {
				$(this).fadeIn("slow")
			}
			var scrollDiv = $(this);
			$(window).scroll(function () {
				if ($(window).scrollTop() == "0") {
					$(scrollDiv).fadeOut("slow")
				} else {
					$(scrollDiv).fadeIn("slow")
				}
			});
			$(this).click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, "slow")
			})
		}
	});
	$(function () {
		$("#toTop").scrollToTop();
	});


	// кнопка вниз -->
	$(function () {
		$.fn.scrollToBottom = function () {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() == "0") {
				$(this).fadeIn("slow")
			}
			var scrollDiv = $(this);
			$(window).scroll(function () {
				if ($(window).scrollTop() == $(document).height() - $(window).height()) {
					$(scrollDiv).fadeOut("slow")
				} else {
					$(scrollDiv).fadeIn("slow")
				}
			});
			$(this).click(function () {
				$("html, body").animate({
					scrollTop: 6000
				}, "slow")
			})
		}
	});
	$(function () {
		$("#toDown").scrollToBottom();
	});

	// инициализазация тултипа
	$(".compare, .cart-compare .cart, li.logout a, .favorite, .at-favorite, .social-select li, a, img").easyTooltip();

	// num input
	(function () {
		var inps = $('div.num-input');
		inps.each(function () {
			var box = $(this);
			var inp = box.find('input');
			var plus = box.find('.plus');
			var minus = box.find('.minus');
			plus.click(function () {
				inp.val(+inp.val() + 1);
			});
			minus.click(function () {
				var val = +inp.val() - 1;
				if (val < 0) val = 0;
				inp.val(val);
			});
		});
	})();

	// если больше 600рх, то добавляется кастромный скроллбар
	if ($(".results ul").height() > 600) {
		$(".results").addClass("flexcroll");
	}

	// подключение слайдера в быстром просмотре
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		nav: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		dots: false
	});




});