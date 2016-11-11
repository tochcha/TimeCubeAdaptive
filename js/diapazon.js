jQuery("#slider").slider({
	min: 0,
	max: 495000,
	values: [42200, 300000],
	range: true,
	stop: function (event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
	},
	slide: function (event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
	}
});
jQuery("input#minCost").change(function () {
	var value1 = jQuery("input#minCost").val();
	var value2 = jQuery("input#maxCost").val();

	if (parseInt(value1) > parseInt(value2)) {
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values", 0, value1);
});
jQuery("input#maxCost").change(function () {
	var value1 = jQuery("input#minCost").val();
	var value2 = jQuery("input#maxCost").val();

	if (value2 > 495000) {
		value2 = 495000;
		jQuery("input#maxCost").val(495000)
	}

	if (parseInt(value1) > parseInt(value2)) {
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values", 1, value2);
});