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
		
		$(this).css({"-webkit-animation-delay" : delay + "s"});

	});

	$("#email").click(function (e) {
		/* Regular email mailto opened if JS is not enabled */
		/* e.preventDefault(); */
	});
	
	$(".works-entry").hover(function () {
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
