
$(document).ready(function() {
	
	function contentCut() {
		$('.contentCutBtnBox').on('click', 'div', function() {
			$(this).addClass('selectActive').siblings().removeClass('selectActive')
			var type = $(this).attr('data-type')
			$('.showMainContent').css('display', 'none')
			$('#'+type).css('display', 'block')
		})
	}

	function backHome() {
		$('.topTitle>b').click(function() {
			window.history.go(-1)
		})
	}

	function pageLoadShow() {
		var pageType = window.location.href.split('#')[1]
		if(pageType) {
			var itemCut = $('.contentCutBtnBox>div')
			for(var i=0;i<itemCut.length;i++) {
				if($(itemCut[i]).attr('data-type') == pageType) {
					$(itemCut[i]).addClass('selectActive').siblings().removeClass('selectActive')
				}
			}
			$('#'+pageType).css('display', 'block')
		}else {
			$($('.contentCutBtnBox>div')[0]).addClass('selectActive').siblings().removeClass('selectActive')
			$($('.showMainContent')[0]).css('display', 'block')
		}
		
	}
	//统一加载
	$("html").niceScroll({cursorborder:"",cursorcolor:"#bbb",boxzoom:true}) //cursoropacitymax:0.7,touchbehavior:true
	pageLoadShow()
	contentCut()
	backHome()
})