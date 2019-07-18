$(document).ready(function() {

  var historySwiper = new Swiper ('.history-swiper', {
		direction: 'horizontal',
		speed: 400,
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      
        400: {
          centeredSlides: true,
          slidesPerView: 1.14,
        },
    
        600: {
          centeredSlides: true,
          slidesPerView: 1.12,
          spaceBetween: 0,
        },

        1200: {
          centeredSlides: true,
          slidesPerView: 1.2
        },
    
        1860: {
          slidesPerView: 2,
        }
      }
    })
  

  
    var bottomSwiper = new Swiper ('.bottom-swiper', {
      direction: 'horizontal',
      speed: 400,
      slidesPerView: 3,
      breakpoints: {
  
        1400: {
          slidesPerView: 1.1,
          initialSlide: 1,
          centeredSlides: true,
          roundLengths: true,
          loop: true,
          loopAdditionalSlides: 100
        },
  
        1860: {
          slidesPerView: 2,
        }
      }
      })
  
  
    $(".burger-menu").click(function(){
      $(".nav, .footer").toggle()
      $(".menu").toggleClass("opened");
      $(this).toggleClass("is-active");
      $("body, html").toggleClass("ovh");
    });

	window.sf = {};
  window.sf.form = {
    init: function() {
      var o = this;
      $(".feedback__input--phone").keydown(function(e) {
          -1 !== $.inArray(e.keyCode, [
            46,
            8,
            9,
            27,
            13,
            110,
            190
          ]) || 65 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
        }),
        $(".feedback__input--phone").inputmask("+7 (999) 999 - 99 - 99", {
          placeholder: " ",
          showMaskOnHover: !1,
          showMaskOnFocus: !1
        }),
        $(".feedback__form").submit(function(e) {
          if (!o.checkForm($(this)))
            return !1
        })
    },
    checkForm: function(e) {
      var o = !0;
      return e.find(".warning").removeClass("warning"),
        e.find("input, textarea, select").each(function() {
          if ($(this).data("req"))
            switch ($(this).data("type")) {
			  case 'email':
				var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
				if (!re.test($(this).val())) {
					$(this).addClass('warning');
					checkResult = false;
				}
				break;
              case "mobile":
                $.trim($(this).val()).length < 22 && ($(this).addClass("warning"), o = !1);
                break;
              default:
                "" === $.trim($(this).val()) && ($(this).addClass("warning"), o = !1)
            }
        }),
        o
    }
  }.init(),

  window.sf = {};
  window.sf.animation = {
    init: function() {

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
      }
    
  }.init();

})

