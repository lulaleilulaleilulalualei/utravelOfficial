
var body = document.getElementsByTagName("body")[0];

body.innerHTML = ''

var html = [
	'<h2 style="font-size: 36px;font-weight: 500;color: #000;margin-top: 100px;text-align: center;">您的浏览器版本过低，IE8以下版本不支持，请更新或升级浏览器</h2>'
].join('')

body.innerHTML = html