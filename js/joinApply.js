
$(document).ready(function() {

	function backHome() {
		$('.topTitle>b').unbind('click').click(function() {
			$('.backNotice').fadeIn()

			$('.noBackBefore').unbind('click').click(function() {
				$('.backNotice').fadeOut()
			})
			$('.backBefore').unbind('click').click(function(){
				window.history.go(-1)
			})
		})
	}

	function radioSelect() {
		$('.radioBox input').unbind('click').click(function() {
			$(this).siblings('.anewRadioSty').addClass('selectActive').parent().siblings('label').children('.anewRadioSty').removeClass('selectActive')
		})
	}
	
	function selectBusiness() {
		$('.showBusinessType').on('click', 'div', function() {
			if($(this).attr('class').indexOf('busiSelectActive') != -1) {
				$(this).removeClass('busiSelectActive')
			}else {
				$(this).addClass('busiSelectActive')
			}
		})
	}

	function upLoadImg() {
		$('.previewImgShow input').on('change', function() {
			var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
		    if (objUrl) {
		        $(this).siblings('.preShowImg').find('img').attr("src", objUrl) ; //
		    }

		    function getObjectURL(file) {
			    var url = null ;
			    if (window.createObjectURL!=undefined) { // basic
			        url = window.createObjectURL(file) ;
			    } else if (window.URL!=undefined) { // mozilla(firefox)
			        url = window.URL.createObjectURL(file) ;
			    } else if (window.webkitURL!=undefined) { // webkit or chrome
			        url = window.webkitURL.createObjectURL(file) ;
			    }
			    return url ;
			}
		})
	}

	function joinInfoApply() {
		$('.joinApplyBtn').unbind('click').click(function() {
			// var imgurl = document.getElementById("idCardImg").value;
			// console.log(imgurl)
			var formData = $('.itemModuleInfo').serializeArray()
			// 	data = []
			// for(var j=0;j< formData.length; j++ ) {
			// 	obj[formData[j].name] = formData[j].value
			// }
			console.log(formData)
		})
	}
	//统一调用陪
	$("html").niceScroll({cursorborder:"",cursorcolor:"#bbb",boxzoom:true}) //cursoropacitymax:0.7,touchbehavior:true
	backHome()
	radioSelect()
	selectBusiness()
	upLoadImg()
	joinInfoApply()
})