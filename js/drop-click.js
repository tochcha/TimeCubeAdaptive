var _id = 'accordion';
var _innerEl = 'ul';
var _className = 'active';
var _hide = true;

var _menu;
var _nodes;
function initMenu() {
	_menu = document.getElementById(_id);
	if (_menu){
		_nodes = _menu.getElementsByTagName('a');
		for (var i=0; i<_nodes.length; i++) {
			if (_nodes[i].parentNode.getElementsByTagName(_innerEl)[0]) {
				_nodes[i].onclick = function () {
					if(this.parentNode.className.indexOf(_className) !=-1) {
						this.parentNode.className = this.parentNode.className.replace(_className, "");
					} else {
						if (_hide) hideLevels(this);
						this.parentNode.className += ''+_className;
					}
					return false;
				}
			}
		}
	}
}
function hideLevels(_this){
	var _lis = _menu.getElementsByTagName('li');
	for (var i=0; i<_lis.length; i++) {
		var _f = false;
		var _a = _lis[i].getElementsByTagName('a');
		for (var j=0; j<_a.length; j++) {
			if (_a[j] == _this) _f = true;
		}
		if (!_f) _lis[i].className = _lis[i].className.replace(_className, "");
	}
}

if (window.addEventListener){
	window.addEventListener("load", initMenu, false);
	}
else if (window.attachEvent){
	window.attachEvent("onload", initMenu);
	}


	$('ul.accordion li ul').css({
		display: "none"
	});
	$('ul.accordion li').click(function () {
			//$('ul.accordion li.active ul').slideUp(300);
		$(this).find("ul").slideUp(300);
	});
	$('ul.accordion li:has("ul")').click(function () {
		if ($("ul", this).css("display") == "none") {
			$("ul.accordion li ul").slideUp(300);
			$("ul", this).slideDown(300);
		}
	});










