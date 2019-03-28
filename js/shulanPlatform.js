
$(document).ready(function() {

	
	function homeImgScale() { //1920 / 750
		$('.showBannerImg').css({
			height: window.innerWidth * (900 / 1920)
		})
	}

	function closeLoginWin() {
		// $('.loginEnter').click(function() {
		// 	$('.loginWindow').fadeIn()
		// })

		// $('.loginWindow').click(function(e) {
		// 	if(e.target.className == 'loginWindow') {
		// 		$(this).fadeOut()
		// 	}
		// })
	}

	//统一加载
	$("html").niceScroll({cursorborder:"",cursorcolor:"#bbb",boxzoom:true}) //cursoropacitymax:0.7,touchbehavior:true
	setTimeout(function() {
		$('.showBannerImg').css('opacity', 1)
	}, 1)
	homeImgScale()
	closeLoginWin()
	comApi.footerMove() //底部二维码显示
})