$(document).ready(function() {
	setTimeout(function() {
		$('body').addClass('animate');

		var arrD = ["first", "second", "third"],
			i = -1,
			prev = 1;
		setInterval(function () {
			arrD[
				i = ++i % arrD.length
			];
			$('body').addClass(arrD[i]);
			$('body').removeClass(arrD[prev]);
			prev = i;
		}, 6500);
	}, 500)


	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
	  })
});
