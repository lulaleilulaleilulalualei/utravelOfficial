
var browser = getBrowerInfo().client
var comApi = {
		footerMove: function() { //底部二维码显示
		// 公众号 transform: scale(0, 0);
		if(browser.type == 'IE' && browser.version.split('.')[0] < 10) {
			$('.qrCode').css({display: 'none'})
			$('.moveWx').mouseenter(function(){
				$(this).children('.qrCode').fadeIn()
			})
			$('.moveWx').mouseleave(function(){
				$(this).children('.qrCode').fadeOut()
			})
			// 小程序
			$('.moveMini').mouseenter(function(){
				$(this).children('.qrCode').fadeIn()
			})
			$('.moveMini').mouseleave(function(){
				$(this).children('.qrCode').fadeOut()
			})
			// iOS
			$('.moveiOS').mouseenter(function(){
				$(this).children('.qrCode').fadeIn()
			})
			$('.moveiOS').mouseleave(function(){
				$(this).children('.qrCode').fadeOut()
			})
			// 安卓
			$('.moveAndroid').mouseenter(function(){
				$(this).children('.qrCode').fadeIn()
			})
			$('.moveAndroid').mouseleave(function(){
				$(this).children('.qrCode').fadeOut()
			})
		}else {
			$('.qrCode').css({transform: 'scale(0, 0)'})

			$('.moveWx').mouseenter(function(){
				$(this).children('.qrCode').css({
					transformOrigin: 'left bottom',
					transform: 'scale(1, 1)',
				})
			})
			$('.moveWx').mouseleave(function(){
				$(this).children('.qrCode').css({
					transform: 'scale(0, 0)',
				})
			})
			// 小程序
			$('.moveMini').mouseenter(function(){
				$(this).children('.qrCode').css({
					transformOrigin: 'left bottom',
					transform: 'scale(1, 1)',
				})
			})
			$('.moveMini').mouseleave(function(){
				$(this).children('.qrCode').css({
					transform: 'scale(0, 0)',
				})
			})
			// iOS
			$('.moveiOS').mouseenter(function(){
				$(this).children('.qrCode').css({
					transformOrigin: 'right bottom',
					transform: 'scale(1, 1)',
				})
			})
			$('.moveiOS').mouseleave(function(){
				$(this).children('.qrCode').css({
					transform: 'scale(0, 0)',
				})
			})
			// 安卓
			$('.moveAndroid').mouseenter(function(){
				$(this).children('.qrCode').css({
					transformOrigin: 'right bottom',
					transform: 'scale(1, 1)',
				})
			})
			$('.moveAndroid').mouseleave(function(){
				$(this).children('.qrCode').css({
					transform: 'scale(0, 0)',
				})
			})
		}
	}
}