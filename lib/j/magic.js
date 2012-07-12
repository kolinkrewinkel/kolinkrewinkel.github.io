$(function() {
	// ID the browser and add it to the body class for CSS modifications.
	var browser = $.browser;
	if (browser.msie) {
		$("body").addClass("msie");
	} else if (browser.webkit) {
		$("body").addClass("webkit");
	} else if (browser.opera) {
		$("body").addClass("opera");
	} else if (browser.mozilla) {
		$("body").addClass("mozilla");
	} else {
		$("body").addClass("misc");
	}

	$(".works-entry").each(function(index) {
		var delay = (index * 0.5) + 1.2;
		var formattedDelay = delay + "s";
		
		$(this).css({"-webkit-animation-delay" : formattedDelay, "-moz-animation-delay" : formattedDelay, "-ms-animation-delay" : formattedDelay, "animation-delay" : formattedDelay});

	});

	$("#email").click(function (e) {
		/* Regular email mailto opened if JS is not enabled */
		/* e.preventDefault(); */
	});
	
	$(".works-entry, .popover").hover(function () {
		if ($(this).css("opacity") == 0) {
			return false;
		}
		
		var index = $(this).index();
		var popover = $("#popovers").children().get(index);
		
		$(popover).removeClass("popover-hidden");
		$(popover).addClass("popover-show");		
	}, function () {
		var index = $(this).index();
		var popover = $("#popovers").children().get(index);
		
		$(popover).addClass("popover-hidden");
		$(popover).removeClass("popover-show");
	});
});
