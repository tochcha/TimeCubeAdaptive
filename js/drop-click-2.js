var _id2 = 'accordion2';
var _innerEl2 = 'ul';
var _className2 = 'active';
var _hide2 = true;

var _menu2;
var _nodes2;
function initMenu2() {
	_menu2 = document.getElementById(_id2);
	if (_menu2){
		_nodes2 = _menu2.getElementsByTagName('a');
		for (var i=0; i<_nodes2.length; i++) {
			if (_nodes2[i].parentNode.getElementsByTagName(_innerEl2)[0]) {
				_nodes2[i].onclick = function () {
					if(this.parentNode.className.indexOf(_className2) !=-1) {
						this.parentNode.className = this.parentNode.className.replace(_className2, "");
					} else {
						if (_hide2) hideLevels2(this);
						this.parentNode.className += ''+_className2;
					}
					return false;
				}
			}
		}
	}
}
function hideLevels2(_this2){
	var _lis = _menu2.getElementsByTagName('li');
	for (var i=0; i<_lis.length; i++) {
		var _f = false;
		var _a = _lis[i].getElementsByTagName('a');
		for (var j=0; j<_a.length; j++) {
			if (_a[j] == _this2) _f = true;
		}
		if (!_f) _lis[i].className = _lis[i].className.replace(_className2, "");
	}
}

if (window.addEventListener){
	window.addEventListener("load", initMenu2, false);
	}
else if (window.attachEvent){
	window.attachEvent("onload", initMenu2);
	}


	$('ul.accordion2 li ul').css({
		display: "none"
	});
	$('ul.accordion2 li a').click(function () {
		//$('ul.accordion2 li.active ul').slideUp(300);
		$(this).parent().find("ul").slideUp(300);
	});
	$('ul.accordion2 li:has("ul")').click(function () {
		if ($("ul", this).css("display") == "none") {
			$("ul.accordion2 li ul").slideUp(300);
			$("ul", this).slideDown(300);
		}
	});










