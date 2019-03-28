

	var homeNavCut = function() {
		$('.homeNavBox>div').unbind('click','div').on('click','div', function() {
			$(this).addClass('hoveNavActive').siblings().removeClass('hoveNavActive')
			var dataId = $(this).attr('data-id')
			var navheight = $(".homeNav").offset().top
			$('#homeContentBox').empty()
			if(dataId == 'selfCircleBox') {
				$('#homeContentBox').append(selfCircleBox())
				pageSWiper() //slide图片切换
			}else if(dataId == 'selfCarClub') {
				$('#homeContentBox').append(selfCarClub())
				setTimeout(function() {
					$('.carClubBannerImg').css('opacity', 1)
				}, 100)
				if(i18nLanguage == 'en') {
					$('.itemShowContent').css({
						width: '1100px'
					})
					$('.contentText').css({
						width: '620px'
					})
					$('.contentText>div>span').css({
						width: '100%',
					})
					$('.contentText>div').css({
						paddingLeft: '25px'
					})
					$('.contentText>div>b').css({
						position: 'absolute',
						'left': 0
					})
				}
			}else if(dataId == 'recruitCarClub') {
				$('#homeContentBox').append(recruitCarClub())
				recruitApply() //二维码显示
				if(i18nLanguage == 'en') {
					$('.recruitModule').css({
						paddingTop: '50px'
					})
					$('.moduleText').css({
						width: '530px'
					})
					$('.moduleText>p').css({
						marginBottom: '25px'
					})
				}
			}
			$('body,html').animate({scrollTop:navheight},"speed");
			/*执行I18n翻译*/
    		execI18n();
    		imgLazyLoad()
		})
	}

	var topNavCut = function() {
		$('.navCut').on('click', 'div', function() {
			var type = $(this).attr('data-type')
			if(type != '#') {
				$(this).addClass('defaultActive').siblings().removeClass('defaultActive')
				$('#main').empty()
				if(type == 'home') {
					$('#main').append(home())
					setTimeout(function() {
						$('.homeBannerImg').css('opacity', 1)
					}, 100)
					$('#homeContentBox').append(selfCircleBox());
					homeNavCut() //主页切换
					homeBannerMouse() //鼠标移入效果
					pageSWiper() //slide图片切换
					$('.pageaside').fadeOut()
					setTimeout(function() {
						homeNavFloat() //悬浮
						imgLazyLoad()
					}, 200)
				}else if(type == 'about') {
					$('#main').append(aboutUs())
					setTimeout(function() {
						$('.bannerBg').css('opacity', 1)
					}, 100)
					$('.pageaside').fadeIn()
					imgLazyLoad()
				}
				homeImgScale()
				/*执行I18n翻译*/
    			execI18n();
			}
		})
	}

	var homeNavFloat = function() {
		var navheight = $(".homeNav").offset().top
		$(window).unbind('scroll').scroll(function() {
			var pageType = window.location.href.split('#')[1]
			if(!pageType || pageType == 'toHome') {
				if(navheight) {
					var this_scrollTop = $(this).scrollTop();
					if (this_scrollTop > navheight) {
						$(".homeNavBox").css({
							"position": "fixed"
						});
						$('.pageaside').fadeIn()
					}
					if (this_scrollTop < navheight) {
						$(".homeNavBox").css({
							"position": "absolute"
						});
						$('.pageaside').fadeOut()
					}
				}else {
					navheight = $(".homeNavBox").offset().top
				}
			}
		})
	}

	var homeBannerMouse = function() {
		$('.iOSLoad').unbind('mouseenter').mouseenter(function(evt) {
			$(this).children('.homeLookQr').css({display: 'block'})
		})
		$('.iOSLoad').unbind('mouseleave ').mouseleave (function(evt) {
			$(this).children('.homeLookQr').css({display: 'none'})
		})
		$('.androidLoad').unbind('mouseenter').mouseenter(function() {
			$(this).children('.homeLookQr').css({display: 'block'})
		})
		$('.androidLoad').unbind('mouseleave').mouseleave(function() {
			$(this).children('.homeLookQr').css({display: 'none'})
		})
	}

	var recruitApply = function() {
		$('.toApplyClub').unbind('click').click(function() {
			var dom = $('.toApplyClub')
			for(var i=0;i<dom.length;i++) {
				$(dom[i]).children('.showLoadAppQr').fadeOut()
			}
			if($(this).children('.showLoadAppQr').css('display') == 'block') {
				$(this).children('.showLoadAppQr').fadeOut()
			}else {
				$(this).children('.showLoadAppQr').fadeIn()
			}
			
		})
	}

	var asideEvent = function () {
		$('.asideToTop').click(function() {
			$('body,html').animate({scrollTop:0},"speed");
		})

		$('.asideQr').mouseenter(function() {
			$('.showAppQr').fadeIn()
		})
		$('.asideQr').mouseleave(function() {
			$('.showAppQr').fadeOut()
		})
	}

	var pageSWiper = function() {
		if(browser.type == 'IE' && browser.version.split('.')[0] < 10) {
			$($('.showGroup01>div')[0]).addClass('activeCut').siblings().removeClass('activeCut')
			var swiper01 = new Swiper('.group01', {
			        paginationClickable: true,
			        mode: 'vertical',
			        loop : true,
			        autoplay : 3000,
			        speed:300,
			        onSlideChangeStart: function(swiper){
			        	var actIndex = 0
			       		if(swiper.previousIndex == 3) {
			       			actIndex = 0
			       		}else {
			       			actIndex = swiper.previousIndex
			       		}
				      $($('.showGroup01>div')[actIndex]).addClass('activeCut').siblings().removeClass('activeCut')
				    }
		    })

			$($('.showGroup02>div')[0]).addClass('activeCut').siblings().removeClass('activeCut')
		    var swiper02 = new Swiper('.group02', {
			        paginationClickable: true,
			        mode: 'vertical',
			        loop : true,
			        autoplay : 3000,
			        speed:300,
			        onSlideChangeStart: function(swiper){
			        	var actIndex = 0
			       		if(swiper.previousIndex == 3) {
			       			actIndex = 0
			       		}else {
			       			actIndex = swiper.previousIndex
			       		}
				      $($('.showGroup02>div')[actIndex]).addClass('activeCut').siblings().removeClass('activeCut')
				    }
		    })
		}else {
			var swiper01 = new Swiper('.group01', {
			        paginationClickable: true,
			        direction: 'vertical',
			        loop : true,
			        autoplay : 3000,
			        speed:500,
			        onSlideChangeStart: function(swiper){
				      $($('.showGroup01>div')[swiper.realIndex]).addClass('activeCut').siblings().removeClass('activeCut')
				    }
		    })

		    var swiper02 = new Swiper('.group02', {
			        paginationClickable: true,
			        effect : 'fade',
			        loop : true,
			        autoplay : 3000,
			        speed:500,
			        onSlideChangeStart: function(swiper){
				      $($('.showGroup02>div')[swiper.realIndex]).addClass('activeCut').siblings().removeClass('activeCut')
				    }
		    })
		}
	}

	function imgLazyLoad() {
		$("img.lazy").lazyload({effect: "fadeIn",threshold: 150});
	}

	function homeImgScale() { //1920 / 750
		$('.homeBannerImg').css({
			height: window.innerWidth * (750 / 1920)
		})

		$('.bannerBg').css({
			height: window.innerWidth * (768 / 1920)
		})
	}

	var startInit = function() {
		$("html").niceScroll({cursorborder:"",cursorcolor:"#bbb",boxzoom:true}) //cursoropacitymax:0.7,touchbehavior:true
		comApi.footerMove() //底部二维码显示
		topNavCut() //顶部切换
		asideEvent() //侧边
		$('.toJumptoStrictSelection').click(function() {
			window.location = window.location.href.split('#')[0] + 'utravelStrictSelection.html'
		})
		var pageType = window.location.href.split('#')[1]
		if(!pageType || pageType == 'toHome') {
			$('#main').append(home())
			setTimeout(function() {
				$('.homeBannerImg').css('opacity', 1)
			}, 100)
			$('#homeContentBox').append(selfCircleBox()) ;//默认加载
			homeNavCut() //主页切换
			homeBannerMouse() //鼠标移入效果
			/*执行I18n翻译*/
			execI18n();
			$('.toHome').addClass('defaultActive').siblings().removeClass('defaultActive')
		}else {
			$('#main').append(aboutUs())
			setTimeout(function() {
				$('.bannerBg').css('opacity', 1)
			}, 100)
			$('.toAbout').addClass('defaultActive').siblings().removeClass('defaultActive')
			$('.pageaside').fadeIn()
			/*执行I18n翻译*/
			execI18n();
			imgLazyLoad()
		}
		 /* 首页图片尺寸 */
			homeImgScale()

		// ie8效果兼容
		if(browser.type == 'IE' && browser.version.split('.')[0] <= 8 ) {
			$('.qrCode>b').css({
				display:'none'
			})
		}
	}

	var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
    	isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    	
    if(isAndroid || isiOS) {
    	window.location.href = 'http://mobile.ulvjia.com/'
    }else {
    	if(browser.type == 'IE') {
			if(browser.version.split('.')[0] >= 8) {
				startInit() //开启回调
			}
		}else {
			startInit() //开启回调
		}

		document.onreadystatechange = function() { //针对首页做的调整
			if(document.readyState == "complete") {//当页面加载状态为完全结束时进入
				var pageType = window.location.href.split('#')[1]
				if(!pageType || pageType == 'toHome') {
					setTimeout(() => {
						homeNavFloat() //悬浮
						imgLazyLoad()
					}, 200)
					pageSWiper() //slide图片切换
					var navheight = $(".homeNav").offset().top || 0
					if($(document).scrollTop() != 0 && $(document).scrollTop() > navheight) {
						$(".homeNavBox").css({
								"position": "fixed"
						});
						$('.pageaside').fadeIn()
					}
				}

			}
		}
    }
